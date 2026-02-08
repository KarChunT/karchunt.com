'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  Database,
  Binary,
  Info,
  Type,
  Hash,
} from 'lucide-react';
import { Callout } from 'fumadocs-ui/components/callout';

interface MemoryCell {
  address: string;
  data: string;
  status: 'idle' | 'read' | 'write' | 'active';
}

interface Operation {
  type: 'read' | 'write';
  address: string;
  data?: string;
  timestamp: number;
}

const RAMVisualization = () => {
  const [memory, setMemory] = useState<MemoryCell[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [selectedCell, setSelectedCell] = useState<MemoryCell | null>(null);
  const [currentOperation, setCurrentOperation] = useState<Operation | null>(
    null,
  );
  const [nextSequentialAddress, setNextSequentialAddress] = useState(0);
  const [inputMode, setInputMode] = useState<'numeric' | 'character'>(
    'numeric',
  );
  const [inputValue, setInputValue] = useState('');

  const resetSimulation = () => {
    setIsRunning(false);
    setCurrentOperation(null);
    setNextSequentialAddress(0);
    setMemory((prev) =>
      prev.map((cell) => ({ ...cell, status: 'idle', data: '00' })),
    );
  };

  const executeOperation = useCallback((operation: Operation) => {
    setCurrentOperation(operation);
    setMemory((prev) =>
      prev.map((cell) => {
        if (cell.address === operation.address) {
          return {
            ...cell,
            status: operation.type,
            data:
              operation.type === 'write' && operation.data
                ? operation.data
                : cell.data,
            lastOperation: operation.type,
          };
        }
        return { ...cell, status: 'idle' };
      }),
    );

    setTimeout(() => {
      setMemory((prev) =>
        prev.map((cell) =>
          cell.address === operation.address
            ? { ...cell, status: 'idle' }
            : cell,
        ),
      );
      setCurrentOperation(null);
    }, 800);
  }, []);

  const handleManualOperation = (type: 'read' | 'write') => {
    if (!selectedCell) return;

    let dataToWrite: string | undefined;

    if (type === 'write') {
      if (inputMode === 'character' && inputValue) {
        const charCode = inputValue.charCodeAt(0);
        dataToWrite = charCode.toString(16).padStart(2, '0').toUpperCase();
      } else if (inputMode === 'numeric' && inputValue) {
        const numValue = Number.parseInt(inputValue);
        if (numValue >= 0 && numValue <= 255) {
          dataToWrite = numValue.toString(16).padStart(2, '0').toUpperCase();
        } else {
          alert('Numeric value must be between 0 and 255');
          return;
        }
      } else {
        dataToWrite = Math.floor(Math.random() * 255 + 1)
          .toString(16)
          .padStart(2, '0')
          .toUpperCase();
      }
    }

    const operation: Operation = {
      type,
      address: selectedCell.address,
      data: dataToWrite,
      timestamp: Date.now(),
    };
    executeOperation(operation);

    if (type === 'write') {
      setInputValue('');
    }
  };

  const hexToBinary = (hex: string) => {
    return Number.parseInt(hex, 16).toString(2).padStart(8, '0');
  };

  const hexToDecimal = (hex: string) => {
    return Number.parseInt(hex, 16);
  };

  const getCellColor = (cell: MemoryCell) => {
    switch (cell.status) {
      case 'read':
        return 'bg-[var(--ram-read)] shadow-[0_0_10px_var(--ram-read)]';
      case 'write':
        return 'bg-[var(--ram-write)] shadow-[0_0_10px_var(--ram-write)]';
      case 'active':
        return 'bg-[var(--ram-active)] shadow-[0_0_8px_var(--ram-active)]';
      default:
        return cell.data !== '00' ? 'bg-[var(--ram-idle)]' : 'bg-card'; // bg-muted
    }
  };

  useEffect(() => {
    const initialMemory: MemoryCell[] = [];
    for (let i = 0; i < 8; i++) {
      initialMemory.push({
        address: `0x${i.toString(16).padStart(3, '0').toUpperCase()}`,
        data: '00',
        status: 'idle',
      });
    }
    setMemory(initialMemory);
    setSelectedCell(initialMemory[0]); // Select first cell by default
  }, []);

  const generateOperation = useCallback((): Operation => {
    const addressIndex = nextSequentialAddress % 8;
    const address = `0x${addressIndex.toString(16).padStart(3, '0').toUpperCase()}`;

    // Auto mode always writes data to fill cells sequentially
    const data = Math.floor(Math.random() * 255 + 1)
      .toString(16)
      .padStart(2, '0')
      .toUpperCase();

    setNextSequentialAddress((prev) => prev + 1);

    return {
      type: 'write',
      address,
      data,
      timestamp: Date.now(),
    };
  }, [nextSequentialAddress]);

  useEffect(() => {
    if (!isRunning) return;

    if (nextSequentialAddress >= 8) {
      setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      const operation = generateOperation();
      executeOperation(operation);
    }, 1200);

    return () => clearInterval(interval);
  }, [isRunning, generateOperation, executeOperation, nextSequentialAddress]);

  return (
    <div className="mt-6 min-h-screen">
      <div className="mx-auto max-w-7xl space-y-6">
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5" />
              Memory Controller
            </CardTitle>
            <CardContent>
              <p className="text-xs text-purple-300">
                <Info className="mr-1 inline h-3 w-3" />
                The reason below that each memory cell is 1 byte (8 bits) is
                because it only hold values from 0-255 (2^8 - 1), not full
                32-bit integers.
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4">
                <Button
                  onClick={() => setIsRunning(!isRunning)}
                  variant={isRunning ? 'destructive' : 'default'}
                  className="flex items-center gap-2"
                  disabled={nextSequentialAddress >= 8 && !isRunning}
                >
                  {isRunning ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                  {isRunning ? 'Stop' : 'Start'} Auto Mode
                  {nextSequentialAddress >= 8 && !isRunning && ' (Complete)'}
                </Button>

                <Button
                  onClick={() => handleManualOperation('write')}
                  variant="outline"
                  className="flex items-center gap-2 border-[var(--ram-write)] text-[var(--ram-write)] hover:bg-[var(--ram-write)]/10"
                  disabled={isRunning || !selectedCell}
                >
                  <Zap className="h-4 w-4" />
                  Write to Selected Cell
                </Button>

                <Button
                  onClick={resetSimulation}
                  variant="outline"
                  className="flex items-center gap-2 bg-transparent"
                >
                  <RotateCcw className="h-4 w-4" />
                  Reset
                </Button>
              </div>
              <div className="bg-muted/30 mt-4 space-y-3 rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <Label htmlFor="input-mode" className="text-sm font-medium">
                    Write Mode:
                  </Label>
                  <Select
                    value={inputMode}
                    onValueChange={(value: 'numeric' | 'character') =>
                      setInputMode(value)
                    }
                  >
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="numeric">
                        <div className="flex items-center gap-2">
                          <Hash className="h-4 w-4" />
                          Numeric
                        </div>
                      </SelectItem>
                      <SelectItem value="character">
                        <div className="flex items-center gap-2">
                          <Type className="h-4 w-4" />
                          Character
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center gap-4">
                  <Label htmlFor="input-value" className="text-sm font-medium">
                    Value:
                  </Label>
                  <Input
                    id="input-value"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={
                      inputMode === 'numeric'
                        ? 'Enter number (0-255)'
                        : 'Enter single character'
                    }
                    className="w-48"
                    maxLength={inputMode === 'character' ? 1 : 3}
                    disabled={isRunning}
                  />
                  <span className="text-muted-foreground text-xs">
                    {inputMode === 'character'
                      ? 'Single character only'
                      : '0-255 range'}
                  </span>
                </div>

                <p className="text-muted-foreground text-xs">
                  <Info className="mr-1 inline h-3 w-3" />
                  Leave empty for random value. Click a cell to select it, then
                  use Write to Selected Cell.
                </p>
              </div>
              <Callout title="Modes">
                <p className="text-sm">
                  <strong>Auto Mode:</strong> Writes data sequentially in order
                  (0x000 → 0x001 → 0x002...) and stops after all 8 cells are
                  filled.
                  <br />
                  <strong>Manual Mode:</strong> Click any cell to select it,
                  then use manual read/write buttons for random access.
                </p>
              </Callout>
            </CardContent>
          </CardHeader>
        </Card>

        <div className="space-y-6">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                Memory Array (8 Cells)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4 rounded-lg border border-[var(--ram-grid)] bg-[var(--ram-grid)]/20 p-6">
                {memory.map((cell, index) => (
                  <div
                    key={cell.address}
                    className={`border-border/30 relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border-2 font-mono text-sm transition-all duration-300 hover:scale-105 ${getCellColor(cell)} ${selectedCell?.address === cell.address ? 'ring-primary ring-2' : ''} ${cell.status === 'read' ? 'ram-cell-read' : ''} ${cell.status === 'write' ? 'ram-cell-write' : ''} `}
                    onClick={() => setSelectedCell(cell)}
                    title={`Click to select this memory cell`}
                  >
                    <div className="mb-1 text-xs opacity-70">
                      {cell.address}
                    </div>
                    <div className="text-lg font-bold">0x{cell.data}</div>
                    <div className="mt-1 text-xs opacity-70">
                      {hexToDecimal(cell.data)}
                    </div>

                    {currentOperation?.address === cell.address && (
                      <div className="absolute inset-0 overflow-hidden rounded-lg">
                        <div className="data-flow absolute top-1/2 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-white to-transparent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-[var(--ram-read)]" />
                  <span>Read Operation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-[var(--ram-write)]" />
                  <span>Write Operation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded bg-[var(--ram-idle)]" />
                  <span>Data Present</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-muted h-3 w-3 rounded" />
                  <span>Empty Cell</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {selectedCell && (
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Binary className="h-5 w-5" />
                  Cell Inspector: {selectedCell.address}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Memory Address</h4>
                      <div className="bg-muted/50 rounded p-3 font-mono text-lg">
                        {selectedCell.address}
                      </div>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Stored Value</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground w-16 text-sm">
                            Hex:
                          </span>
                          <div className="bg-muted/50 rounded p-2 font-mono">
                            0x{selectedCell.data}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground w-16 text-sm">
                            Decimal:
                          </span>
                          <div className="bg-muted/50 rounded p-2 font-mono">
                            {hexToDecimal(selectedCell.data)}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground w-16 text-sm">
                            Binary:
                          </span>
                          <div className="bg-muted/50 rounded p-2 font-mono text-sm">
                            {hexToBinary(selectedCell.data)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">Bit Breakdown</h4>
                      <div className="grid grid-cols-8 gap-1">
                        {hexToBinary(selectedCell.data)
                          .split('')
                          .map((bit, index) => (
                            <div
                              key={index}
                              className={`rounded p-2 text-center font-mono text-sm ${bit === '1' ? 'bg-primary text-primary-foreground' : 'bg-muted'} `}
                            >
                              {bit}
                            </div>
                          ))}
                      </div>
                      <div className="text-muted-foreground mt-1 grid grid-cols-8 gap-1 text-xs">
                        {[7, 6, 5, 4, 3, 2, 1, 0].map((bitPos) => (
                          <div key={bitPos} className="text-center">
                            {bitPos}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default RAMVisualization;
