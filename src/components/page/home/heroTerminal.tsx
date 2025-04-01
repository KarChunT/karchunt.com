import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from '@/components/ui/terminal';

const HeroTerminal = () => {
  const steps = [
    '✔ Preflight checks.',
    '✔ Checking registry.',
    '✔ Gathering documentation.',
    '✔ Gathering blog.',
    '✔ Installing dependencies.',
  ];
  let lastDelay = 0;

  return (
    <Terminal>
      <TypingAnimation>&gt; npm install karchunt@latest</TypingAnimation>

      {steps.map((steps, index) => {
        lastDelay += 500;
        return (
          <AnimatedSpan
            key={index}
            delay={lastDelay}
            className="text-green-500"
          >
            <span>{steps}</span>
          </AnimatedSpan>
        );
      })}

      <AnimatedSpan delay={lastDelay + 500} className="text-blue-500">
        <span>ℹ Updated 1 file:</span>
        <span className="pl-2">- utils/welcome.ts</span>
      </AnimatedSpan>

      <TypingAnimation delay={6000} className="text-muted-foreground">
        Success! Initialization completed.
      </TypingAnimation>
    </Terminal>
  );
};

export default HeroTerminal;
