import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/auburn_logo.png" alt="Auburn" width={28} height={28} />
          <span>AI Supply Chain Guide</span>
        </>
      ),
    },
  };
}
