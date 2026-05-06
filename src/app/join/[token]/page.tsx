import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ token: string }>;
}

interface InviteMember {
  user_id: string;
  display_name: string | null;
  avatar_colour: number | null;
  role: string;
  joined_at: string;
}

interface InviteData {
  group: {
    id: string;
    name: string | null;
    type: string | null;
  };
  inviter: {
    display_name: string | null;
    avatar_colour: number;
  };
  members: InviteMember[];
}

type InviteResult =
  | { status: "valid"; data: InviteData }
  | { status: "expired" }
  | { status: "invalid" };

async function fetchInvite(token: string): Promise<InviteResult> {
  try {
    const res = await fetch(
      `https://api.getso.app/api/v1/invites/${token}`,
      { cache: "no-store" }
    );
    if (res.status === 410) return { status: "expired" };
    if (!res.ok) return { status: "invalid" };
    const data = await res.json();
    return { status: "valid", data };
  } catch {
    return { status: "invalid" };
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { token } = await params;
  const result = await fetchInvite(token);
  const groupName =
    result.status === "valid" && result.data.group.name
      ? result.data.group.name
      : "a household";
  return {
    title: `Join ${groupName} on Getso`,
    description: "You've been invited to a shared shopping list on Getso.",
  };
}

function groupEmoji(type: string | null): string {
  switch (type) {
    case "flat":
    case "home":
      return "🏠";
    case "family":
      return "👨‍👩‍👧";
    case "friends":
      return "👥";
    default:
      return "🛒";
  }
}

function ValidInvite({ data }: { data: InviteData }) {
  const memberCount = data.members.length;
  const emoji = groupEmoji(data.group.type);
  const groupName = data.group.name ?? "Shared list";
  const inviterName = data.inviter.display_name ?? "Someone";

  return (
    <div className="flex flex-col items-center text-center gap-5">
      {/* Group emoji */}
      <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center text-3xl">
        {emoji}
      </div>

      {/* Group info */}
      <div>
        <h1 className="font-semibold text-xl text-text-pri mb-1">{groupName}</h1>
        <p className="text-text-sec text-sm">Invited by {inviterName}</p>
      </div>

      {/* Member count badge */}
      <span className="px-3 py-1 rounded-full bg-bg-sec text-text-muted text-xs border border-border">
        {memberCount === 1 ? "1 member" : `${memberCount} members`}
      </span>

      <hr className="w-full border-border" />

      {/* Primary CTA */}
      <div className="w-full flex flex-col gap-3">
        <a
          href="https://play.google.com/store/apps/details?id=app.getso.mobile"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center px-6 py-3 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-dark transition-colors"
        >
          Download Getso to join
        </a>
        <a
          href="#download"
          className="w-full inline-flex items-center justify-center px-6 py-3 border border-border text-text-sec rounded-full text-sm hover:bg-bg-sec transition-colors opacity-60"
          aria-label="Download on iOS — Coming soon to the App Store"
        >
          Download on iOS (coming soon)
        </a>
      </div>

      <p className="text-text-muted text-xs leading-relaxed">
        Open this link again after installing to join automatically.
      </p>
    </div>
  );
}

function ExpiredInvite() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center text-2xl">
        ⏰
      </div>
      <div>
        <h1 className="font-semibold text-xl text-text-pri mb-2">
          This invite link has expired.
        </h1>
        <p className="text-text-sec text-sm leading-relaxed">
          Ask your flatmate for a new one.
        </p>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=app.getso.mobile"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-border text-text-pri rounded-full text-sm font-medium hover:bg-bg-sec transition-colors"
      >
        Download Getso →
      </a>
    </div>
  );
}

function InvalidInvite() {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <div className="w-14 h-14 rounded-full bg-bg-sec flex items-center justify-center text-2xl">
        🔗
      </div>
      <div>
        <h1 className="font-semibold text-xl text-text-pri mb-2">
          This invite link isn&apos;t valid.
        </h1>
        <p className="text-text-sec text-sm leading-relaxed">
          It may have already been used or the link is incorrect.
        </p>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=app.getso.mobile"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-6 py-3 border border-border text-text-pri rounded-full text-sm font-medium hover:bg-bg-sec transition-colors"
      >
        Download Getso →
      </a>
    </div>
  );
}

export default async function JoinPage({ params }: PageProps) {
  const { token } = await params;
  const result = await fetchInvite(token);

  return (
    <div className="min-h-screen bg-bg-sec flex flex-col items-center px-4 py-12">
      {/* Logo */}
      <a href="/" aria-label="Getso home" className="flex items-center gap-2 mb-12">
        <div className="w-7 h-7 bg-brand rounded-sm flex items-center justify-center">
          <span className="text-white font-bold text-sm leading-none select-none">G</span>
        </div>
        <span className="font-semibold text-lg text-text-pri">getso</span>
      </a>

      {/* Card */}
      <div className="w-full max-w-[380px] bg-white rounded-xl shadow-md p-8">
        {result.status === "valid" ? (
          <ValidInvite data={result.data} />
        ) : result.status === "expired" ? (
          <ExpiredInvite />
        ) : (
          <InvalidInvite />
        )}
      </div>
    </div>
  );
}
