import { SetStateAction, useState } from 'react';
import { sandpackDark } from '@codesandbox/sandpack-themes';
import {
  SANDBOX_TEMPLATES,
  SandpackFiles,
  SandpackFile,
} from '@codesandbox/sandpack-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  SandpackProvider,
  SandpackFileExplorer,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackLayout,
} from '@codesandbox/sandpack-react';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

const CodeSandbox = () => {
  const files = {};
  const { toast } = useToast();
  const templates: string[] = Object.keys(SANDBOX_TEMPLATES);
  const [template, setTemplate] = useState<'react'>('react');

  const handleValueChange = (
    value: string | ((prevState: 'react') => 'react'),
  ) => {
    toast({
      title: `Changing template...`,
      description: `Changing template to "${value}"`,
      duration: 1000,
    });
    setTemplate(value as 'react');
  };

  return (
    <div className="flex h-auto w-auto flex-col gap-4 pt-6">
      <div>
        <Select onValueChange={handleValueChange} defaultValue="react">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Template" />
          </SelectTrigger>
          <SelectContent>
            {templates.map((template) => (
              <SelectItem key={template} value={template}>
                {template}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Toaster />
      </div>
      <div>
        <SandpackProvider
          template={template}
          theme={sandpackDark}
          files={files}
        >
          <SandpackLayout>
            <SandpackFileExplorer
              style={{
                height: '750px',
              }}
            />
            <SandpackCodeEditor
              showLineNumbers={true}
              showInlineErrors={true}
              showTabs={true}
              showRunButton={true}
              closableTabs={true}
              wrapContent={true}
              style={{ height: '750px' }}
            />
            <SandpackPreview
              showNavigator={true}
              showRefreshButton={true}
              showRestartButton={true}
              showOpenInCodeSandbox={true}
              showOpenNewtab={true}
              style={{
                height: '750px',
              }}
            />
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

export default CodeSandbox;
