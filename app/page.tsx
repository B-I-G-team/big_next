import Image from "next/image";
import styles from "./page.module.css";
import PrimaryButton from "@/components/PrimaryButton";
export default function Home() {
  return (
    <>
      <PrimaryButton size="md" reversal={false}>
        MD
      </PrimaryButton>
      <PrimaryButton size="md" reversal={true}>
        MD
      </PrimaryButton>
      <PrimaryButton size="sm" reversal={false}>
        SM
      </PrimaryButton>
      <PrimaryButton size="sm" reversal={true}>
        SM
      </PrimaryButton>
      <PrimaryButton size="fit" reversal={false}>
        FIT
      </PrimaryButton>
      <PrimaryButton size="fit" reversal={true}>
        FIT
      </PrimaryButton>
    </>
  );
}
