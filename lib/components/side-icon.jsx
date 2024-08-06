import * as Uebersicht from "uebersicht";
import { useSimpleBarContext } from "./simple-bar-context.jsx";

const { React } = Uebersicht;

export { sideIconStyles as styles } from "../../lib/styles/components/side-icon";

export function Component() {
  const { settings } = useSimpleBarContext();
  const { sideDecoration } = settings.global;

  if (!sideDecoration) return null;

  return (
    <div className="side-icon">
      <svg
        className="side-icon__svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M18.5373 12.7261c.0337 3.6251 3.1802 4.8315 3.215 4.8469-.0266.085-.5027 1.719-1.6576 3.4069-.9984 1.4593-2.0347 2.9131-3.6671 2.9432-1.6038.0296-2.1196-.9511-3.9534-.9511-1.8332 0-2.4062.921-3.9245.9807-1.5756.0596-2.7755-1.5779-3.7821-3.0319-2.0572-2.9739-3.6292-8.4038-1.5183-12.069 1.0486-1.8202 2.9226-2.9727 4.9566-3.0023 1.5472-.0295 3.0076 1.041 3.9534 1.041.9453 0 2.72-1.2873 4.5857-1.0983.7809.0326 2.9734.3155 4.3811 2.3761-.1135.0703-2.616 1.5272-2.5888 4.5579M15.523 3.8247C16.3596 2.812 16.9226 1.4026 16.769 0c-1.2058.0485-2.6638.8035-3.5287 1.8155-.7751.8962-1.4539 2.3306-1.2707 3.7053 1.344.104 2.7168-.683 3.5534-1.6961Z" />
      </svg>
    </div>
  );
}