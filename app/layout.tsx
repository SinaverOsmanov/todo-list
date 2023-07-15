import { Providers } from "@/lib/providers";
import "./styles/globals.css";

// Слой для передачи store данных из redux

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>{props.children}</body>
      </html>
    </Providers>
  );
}
