import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ASSETLINKS = JSON.stringify([
  {
    relation: ["delegate_permission/common.handle_all_urls"],
    target: {
      namespace: "android_app",
      package_name: "app.getso.mobile",
      sha256_cert_fingerprints: [
        "D1:D6:4D:E2:40:51:8C:EA:AE:74:48:DC:61:E6:54:98:0E:01:23:38:5D:48:7F:94:75:51:CF:40:E5:C6:26:EC",
      ],
    },
  },
]);

const AASA = JSON.stringify({
  _pending:
    "iOS not yet configured — add Apple Team ID and app bundle ID when Apple Developer account is ready",
  applinks: {
    details: [],
  },
});

const JSON_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=3600",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/.well-known/assetlinks.json") {
    return new NextResponse(ASSETLINKS, { headers: JSON_HEADERS });
  }

  if (pathname === "/.well-known/apple-app-site-association") {
    return new NextResponse(AASA, { headers: JSON_HEADERS });
  }
}

export const config = {
  matcher: ["/.well-known/:path*"],
};
