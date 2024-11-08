import Image from 'next/image';
import logotype from '@public/logotype.png';

export default function Landing() {
  return (
    <main className="h-screen flex flex-col gap-8">
      <Image
        src={logotype}
        alt="Learn.ai logo"
        width={180}
        height={38}
        priority
      />

      <h1>Hello Learn.ai!</h1>
    </main>
  );
}
