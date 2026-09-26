import {
  Briefcase,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileDigit,
  Film,
  Gauge,
  GraduationCap,
  Headset,
  Keyboard,
  Lightbulb,
  Network,
  Rocket,
  Satellite,
  Server,
  ShieldCheck,
  Users,
  type LucideProps,
} from "lucide-react";
import type { IconName } from "@/data/site";

const map = {
  code: Code2,
  database: Database,
  cpu: Cpu,
  server: Server,
  network: Network,
  film: Film,
  keyboard: Keyboard,
  graduation: GraduationCap,
  lightbulb: Lightbulb,
  satellite: Satellite,
  rocket: Rocket,
  shield: ShieldCheck,
  users: Users,
  gauge: Gauge,
  headset: Headset,
  briefcase: Briefcase,
  fileDigit: FileDigit,
  cloud: Cloud,
} satisfies Record<IconName, unknown>;

export function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const C = map[name];
  return <C strokeWidth={1.75} {...props} />;
}
