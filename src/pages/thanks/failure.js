import Image from "next/image";
import { Message } from "../../ui/components";
import { Button } from "../../ui/core";
import { getLayout } from "../../layouts/main";
import Link from "next/link";

export default function ThanksFailurePage() {
  return (
    <Message
      title="Oh no"
      content="Your payment hasn't been received"
      action={
        <Button className="bg-primary">
          <Link href="/">
            <a>Return to home</a>
          </Link>
        </Button>
      }
      image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
    />
  );
}

ThanksFailurePage.getLayout = getLayout;
