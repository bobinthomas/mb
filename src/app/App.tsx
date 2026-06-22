import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import svgPaths from "@/imports/GroupReviewConfiguration-1/svg-aw4nsdxljr";
import emptyStatePaths from "@/imports/Frame/svg-0az1rbloz0";
import imgImage2 from "@/imports/GroupReviewConfiguration-1/a3c1266a69fbde8dd338ab7916b3e9274218ab71.png";

// ─── SVG icons ───────────────────────────────────────────────────────────────

function IconHeadset() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-headset)"><path d={svgPaths.p14317800} stroke="white" strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-headset"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconHelpCircle() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip-help)"><path d={svgPaths.p1fb62380} stroke="#718096" strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-help"><rect fill="white" height="20" width="20" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconBell() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[-10%_-10%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
          <path d={svgPaths.p1effc900} stroke="#718096" strokeLinecap="round" strokeWidth="2" />
          <circle cx="18" cy="4" fill="#FFD100" r="4" />
        </svg>
      </div>
    </div>
  );
}
function IconHistory({ color = "#1F2D3D" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-hist)"><path d={svgPaths.p3c7aca00} stroke={color} strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-hist"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconInfo() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-info)"><path d={svgPaths.p10e41280} stroke="#A0AEC0" strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-info"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconSearch() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-search)"><path d={svgPaths.pb810ec0} stroke="#718096" strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-search"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconPlus({ color = "#1F2D3D" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p133cc000} stroke={color} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
function IconChevronRight({ size = 14, color = "#718096" }: { size?: number; color?: string }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d="M5.25 10.5L8.75 7L5.25 3.5" stroke={color} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
function IconChevronLeft({ size = 14, color = "#718096" }: { size?: number; color?: string }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d="M8.75 10.5L5.25 7L8.75 3.5" stroke={color} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
function IconChevronDown({ color = "white" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke={color} strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
function IconLock({ color = "#718096", size = 10 }: { color?: string; size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip-lock)"><path d={svgPaths.p3b73c280} stroke={color} strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-lock"><rect fill="white" height="10" width="10" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconAlertTriangle({ color = "#b45309", size = 20 }: { color?: string; size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20">
        <path d="M8.574 2.057a1.6 1.6 0 0 1 2.852 0l6.857 12.343A1.6 1.6 0 0 1 16.857 17H3.143a1.6 1.6 0 0 1-1.426-2.6L8.574 2.057Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M10 7.5v3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="13.5" r="0.75" fill={color} />
      </svg>
    </div>
  );
}
function IconMinusSquare({ size = 16 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p31a74780} stroke="#718096" strokeLinecap="round" />
      </svg>
    </div>
  );
}
function IconFolder() {
  return (
    <div className="relative shrink-0 size-[18px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <path d={svgPaths.pf1fc000} stroke="#718096" strokeLinecap="round" />
      </svg>
    </div>
  );
}
function IconStar() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-star)"><path d={svgPaths.p2145d0f0} stroke="#F6AD55" strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-star"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconFileText({ size = 16 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p3cbc4600} stroke="#1D1D1B" strokeLinecap="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
function IconFileTextSm({ color = "#718096" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <path d={svgPaths.p1b3c2900} stroke={color} strokeLinecap="round" />
      </svg>
    </div>
  );
}
function IconEdit({ disabled = false }: { disabled?: boolean }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-edit)"><path d={svgPaths.p1920900} stroke={disabled ? "#cbd5e0" : "#718096"} strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-edit"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconTrash({ disabled = false }: { disabled?: boolean }) {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip-trash)"><path d={svgPaths.p234d2680} stroke={disabled ? "#cbd5e0" : "#718096"} strokeLinecap="round" strokeWidth="2" /></g>
        <defs><clipPath id="clip-trash"><rect fill="white" height="14" width="14" /></clipPath></defs>
      </svg>
    </div>
  );
}
function IconX({ color = "#718096" }: { color?: string }) {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 16 16">
        <path d="M12 4L4 12M4 4l8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}
function IconCheck({ color = "#00bfa5", size = 14 }: { color?: string; size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14 14">
        <path d="M3 7.25L5.75 10L11 4" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    </div>
  );
}
function IconUser({ color = "#3182ce", size = 14 }: { color?: string; size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14 14">
        <circle cx="7" cy="4.5" r="2.5" stroke={color} strokeWidth="1.5" />
        <path d="M2 12c0-2.5 2.24-4 5-4s5 1.5 5 4" stroke={color} strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// ─── Modal shell ─────────────────────────────────────────────────────────────

function Modal({ onClose, children, width = "max-w-[480px]" }: { onClose: () => void; children: React.ReactNode; width?: string }) {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-[280px] z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#1a1a2e]/50" onClick={onClose} />
      <div className={`relative bg-white rounded-[8px] w-full ${width} max-h-[calc(100vh-32px)] overflow-x-hidden overflow-y-auto shadow-xl`}>
        {children}
      </div>
    </div>
  );
}

// ─── Shared modal primitives ──────────────────────────────────────────────────

function ModalHeader({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#e2e8f0]">
      <p className="font-['Figtree',sans-serif] font-bold text-[16px] text-[#1a1a2e]">{title}</p>
      <button onClick={onClose} className="p-[4px] hover:bg-gray-100 rounded-[4px] transition-colors"><IconX /></button>
    </div>
  );
}

function BtnPrimary({ label, onClick, disabled = false }: { label: string; onClick: () => void; disabled?: boolean }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-[20px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-bold text-[13px] transition-colors ${
        disabled
          ? "bg-[#e2e8f0] text-[#a0aec0] cursor-not-allowed"
          : "bg-[#1d1d1b] text-white hover:bg-[#333]"
      }`}
    >
      {label}
    </button>
  );
}

function BtnSecondary({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} className="px-[20px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-semibold text-[13px] text-[#4a5568] border border-[#e2e8f0] hover:bg-gray-50 transition-colors">
      {label}
    </button>
  );
}

// ─── Popup 1: Create New Group ────────────────────────────────────────────────

function CreateGroupModal({ onClose }: { onClose: () => void }) {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal onClose={onClose}>
      <ModalHeader title="Create New Group" onClose={onClose} />
      <div className="px-[24px] py-[20px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[6px]">
          <label className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">
            Group Name <span className="text-[#e53e3e]">*</span>
          </label>
          <input
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="e.g. Maybank Corporate Group"
            className="border border-[#e2e8f0] rounded-[6px] px-[12px] py-[9px] text-[13px] font-['Figtree',sans-serif] font-normal outline-none focus:border-[#ffd100] transition-colors placeholder:text-[#a0aec0]"
          />
        </div>
        <div className="flex flex-col gap-[6px]">
          <label className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Optional description for this group"
            rows={3}
            className="border border-[#e2e8f0] rounded-[6px] px-[12px] py-[9px] text-[13px] font-['Figtree',sans-serif] font-normal outline-none focus:border-[#ffd100] transition-colors resize-none placeholder:text-[#a0aec0]"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <BtnPrimary label="Create Group" onClick={onClose} disabled={!groupName.trim()} />
      </div>
    </Modal>
  );
}

// ─── Popup 2: Add Child Application ──────────────────────────────────────────

const searchableApps = [
  { id: "APP-2026-00128", name: "Letters of Credit",        owner: "Amir Hassan",  conflict: null },
  { id: "APP-2026-00129", name: "Foreign Exchange Facility", owner: "Priya Nair",   conflict: "Global Ventures" },
  { id: "APP-2026-00130", name: "Treasury Management",       owner: "Chen Wei",     conflict: null },
  { id: "APP-2026-00131", name: "Revolving Credit Facility", owner: "Siti Rahimah", conflict: null },
  { id: "APP-2026-00132", name: "Asset-Backed Financing",    owner: "Raj Kumar",    conflict: null },
];

function AddChildModal({
  onClose,
  onConflict,
}: {
  onClose: () => void;
  onConflict: (groupName: string) => void;
}) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const results = searchableApps.filter(
    (a) => a.id.toLowerCase().includes(query.toLowerCase()) || a.name.toLowerCase().includes(query.toLowerCase())
  );

  function handleAdd() {
    const app = searchableApps.find((a) => a.id === selected);
    if (app?.conflict) {
      onConflict(app.conflict);
    } else {
      onClose();
    }
  }

  return (
    <Modal onClose={onClose} width="max-w-[560px]">
      <ModalHeader title="Add Child Application" onClose={onClose} />
      <div className="px-[24px] py-[20px] flex flex-col gap-[14px]">
        {/* Search */}
        <div className="flex items-center gap-[8px] border border-[#e2e8f0] rounded-[6px] px-[12px] py-[9px] bg-[#f7fafc] focus-within:border-[#ffd100] transition-colors">
          <IconSearch />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search applications by ID or name"
            className="flex-1 bg-transparent text-[13px] font-['Figtree',sans-serif] font-normal outline-none placeholder:text-[#a0aec0]"
          />
        </div>

        {/* Results table */}
        <div className="rounded-[6px] border border-[#e2e8f0] overflow-hidden">
          <div className="overflow-x-auto">
            {/* Header */}
            <div className="bg-[#f7fafc] grid grid-cols-[1fr_160px_100px] px-[12px] py-[8px] min-w-[420px]">
              {["APPLICATION", "OWNER", ""].map((h) => (
                <p key={h} className="font-['Figtree',sans-serif] font-semibold text-[11px] text-[#718096] uppercase">{h}</p>
              ))}
            </div>
            {/* Rows */}
            <div className="max-h-[200px] overflow-y-auto">
              {results.map((app) => (
                <div
                  key={app.id}
                  onClick={() => setSelected(app.id)}
                  className={`grid grid-cols-[1fr_160px_100px] px-[12px] py-[10px] min-w-[420px] cursor-pointer border-t border-[#e2e8f0] transition-colors ${
                    selected === app.id ? "bg-[#fff9e6]" : "hover:bg-[#fafafa]"
                  }`}
                >
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1d1d1b]">{app.id}</p>
                    <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#718096]">{app.name}</p>
                  </div>
                  <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#1d1d1b] self-center">{app.owner}</p>
                  <div className="self-center">
                    {app.conflict && (
                      <span className="bg-[#fef3c7] text-[#92400e] text-[11px] font-['Figtree',sans-serif] font-semibold px-[6px] py-[2px] rounded-full">In group</span>
                    )}
                  </div>
                </div>
              ))}
              {results.length === 0 && (
                <p className="px-[12px] py-[20px] text-[13px] text-[#a0aec0] font-['Figtree',sans-serif] font-normal text-center">No applications found</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <BtnPrimary label="Add Selected" onClick={handleAdd} disabled={!selected} />
      </div>
    </Modal>
  );
}

// ─── Popup 3: Relationship Conflict ──────────────────────────────────────────

function ConflictModal({ groupName, onClose }: { groupName: string; onClose: () => void }) {
  return (
    <Modal onClose={onClose} width="max-w-[420px]">
      <ModalHeader title="Relationship Conflict" onClose={onClose} />
      <div className="px-[24px] py-[24px] flex flex-col gap-[16px] items-center text-center">
        <div className="bg-[#fef3c7] rounded-full p-[14px]">
          <IconAlertTriangle color="#b45309" size={28} />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Figtree',sans-serif] font-bold text-[15px] text-[#1a1a2e]">Application already in a group</p>
          <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#4a5568] leading-relaxed">
            This application already belongs to <span className="font-['Figtree',sans-serif] font-semibold text-[#1a1a2e]">{groupName}</span>. To add it here, you must request a transfer from that group.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <button onClick={onClose} className="px-[20px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-bold text-[13px] text-white bg-[#d97706] hover:bg-[#b45309] transition-colors">
          Request Transfer
        </button>
      </div>
    </Modal>
  );
}

// ─── Popup 4: Remove Child Application ───────────────────────────────────────

function RemoveChildModal({ appId, onClose }: { appId: string; onClose: () => void }) {
  return (
    <Modal onClose={onClose} width="max-w-[420px]">
      <ModalHeader title="Remove Child Application" onClose={onClose} />
      <div className="px-[24px] py-[24px] flex flex-col gap-[16px] items-center text-center">
        <div className="bg-[#fff5f5] rounded-full p-[14px]">
          <svg className="block" width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="#e53e3e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M10 11v6M14 11v6" stroke="#e53e3e" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Figtree',sans-serif] font-bold text-[15px] text-[#1a1a2e]">Remove child application?</p>
          <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#4a5568] leading-relaxed">
            Are you sure you want to remove <span className="font-['Figtree',sans-serif] font-semibold text-[#1a1a2e]">{appId}</span> from this group? This action can be undone by re-adding the application.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <button onClick={onClose} className="px-[20px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-bold text-[13px] text-white bg-[#e53e3e] hover:bg-[#c53030] transition-colors">
          Remove
        </button>
      </div>
    </Modal>
  );
}

// ─── Popup 5: Change Parent Application ──────────────────────────────────────

const changeParentChildren = [
  { id: "APP-2026-00124", name: "Term Loan Facility" },
  { id: "APP-2026-00125", name: "Trade Finance Facility" },
  { id: "APP-2026-00126", name: "Guarantee Facility" },
  { id: "APP-2026-00127", name: "Cash Management Facility" },
];

function ChangeParentModal({
  onClose,
  onContinue,
}: {
  onClose: () => void;
  onContinue: (newParentId: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <Modal onClose={onClose} width="max-w-[500px]">
      <ModalHeader title="Change Parent Application" onClose={onClose} />
      <div className="px-[24px] py-[20px] flex flex-col gap-[16px]">
        <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#4a5568] leading-relaxed">
          Select a new parent from the existing child applications. The current parent will become a child.
        </p>

        {/* Current parent (read-only) */}
        <div className="bg-[#f7fafc] border border-[#e2e8f0] rounded-[6px] px-[14px] py-[10px] flex items-center gap-[10px]">
          <IconStar />
          <div className="flex flex-col gap-[1px]">
            <p className="font-['Figtree',sans-serif] font-semibold text-[11px] text-[#718096] uppercase">Current parent</p>
            <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">APP-2026-00123 — Working Capital Facility</p>
          </div>
        </div>

        {/* Select new parent */}
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Figtree',sans-serif] font-semibold text-[11px] text-[#718096] uppercase">Select new parent</p>
          <div className="rounded-[6px] border border-[#e2e8f0] overflow-hidden">
            {changeParentChildren.map((child, i) => (
              <div
                key={child.id}
                onClick={() => setSelected(child.id)}
                className={`flex items-center gap-[12px] px-[14px] py-[11px] cursor-pointer transition-colors ${i > 0 ? "border-t border-[#e2e8f0]" : ""} ${selected === child.id ? "bg-[#fff9e6]" : "hover:bg-[#fafafa]"}`}
              >
                {/* Radio */}
                <div className={`shrink-0 w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center ${selected === child.id ? "border-[#f6ad55]" : "border-[#e2e8f0]"}`}>
                  {selected === child.id && <div className="w-[7px] h-[7px] rounded-full bg-[#f6ad55]" />}
                </div>
                <div className="flex flex-col gap-[1px]">
                  <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">{child.id}</p>
                  <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#718096]">{child.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <BtnPrimary label="Continue" onClick={() => selected && onContinue(selected)} disabled={!selected} />
      </div>
    </Modal>
  );
}

// ─── Popup 6: Parent Change Warning ──────────────────────────────────────────

function ParentChangeWarningModal({
  newParentId,
  onClose,
  onConfirm,
}: {
  newParentId: string;
  onClose: () => void;
  onConfirm: () => void;
}) {
  const [confirmText, setConfirmText] = useState("");
  const isReady = confirmText === "CONFIRM";
  const newParent = changeParentChildren.find((c) => c.id === newParentId);

  return (
    <Modal onClose={onClose} width="max-w-[520px]">
      <div className="h-[4px] w-full bg-[#e53e3e]" />
      <ModalHeader title="Change Parent Application?" onClose={onClose} />
      <div className="px-[24px] py-[20px] flex flex-col gap-[16px]">
        {/* Warning block */}
        <div className="bg-[#fff5f5] border border-[#fed7d7] rounded-[6px] px-[14px] py-[12px] flex items-start gap-[10px]">
          <div className="shrink-0 mt-[1px]"><IconAlertTriangle color="#e53e3e" size={18} /></div>
          <div>
            <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#c53030] mb-[6px]">Changing the parent application will:</p>
            <ul className="flex flex-col gap-[4px]">
              {[
                "Rebuild the group hierarchy",
                "Lock all future modifications to this group",
                "Trigger relationship revalidation across linked applications",
              ].map((item) => (
                <li key={item} className="flex items-start gap-[6px]">
                  <span className="text-[#e53e3e] mt-[1px] font-bold leading-none">·</span>
                  <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#742a2a] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Summary */}
        <div className="flex flex-col gap-[6px] bg-[#f7fafc] border border-[#e2e8f0] rounded-[6px] px-[14px] py-[10px]">
          <div className="flex items-center gap-[8px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#718096] w-[110px] shrink-0">Current parent</span>
            <span className="font-['Figtree',sans-serif] font-semibold text-[12px] text-[#1a1a2e]">APP-2026-00123 — Working Capital Facility</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <span className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#718096] w-[110px] shrink-0">New parent</span>
            <span className="font-['Figtree',sans-serif] font-semibold text-[12px] text-[#1a1a2e]">{newParent?.id} — {newParent?.name}</span>
          </div>
        </div>

        {/* Confirm input */}
        <div className="flex flex-col gap-[6px]">
          <label className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">
            Type <span className="font-['Figtree',sans-serif] font-bold tracking-widest text-[#e53e3e] bg-[#fff5f5] px-[4px] rounded">CONFIRM</span> to proceed
          </label>
          <input
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="CONFIRM"
            className="border border-[#e2e8f0] rounded-[6px] px-[12px] py-[9px] text-[13px] font-['Figtree',sans-serif] font-normal outline-none focus:border-[#e53e3e] transition-colors placeholder:text-[#a0aec0] tracking-widest"
          />
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <button
          onClick={isReady ? onConfirm : undefined}
          disabled={!isReady}
          className={`px-[20px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-bold text-[13px] transition-colors ${
            isReady ? "bg-[#e53e3e] text-white hover:bg-[#c53030] cursor-pointer" : "bg-[#e2e8f0] text-[#a0aec0] cursor-not-allowed"
          }`}
        >
          Change Parent
        </button>
      </div>
    </Modal>
  );
}

// ─── Popup 7: Configuration Locked ───────────────────────────────────────────

function ConfigLockedModal({ onClose }: { onClose: () => void }) {
  const disabledItems = ["Add Child Application", "Remove Child Application", "Change Parent Application"];
  return (
    <Modal onClose={onClose} width="max-w-[440px]">
      <div className="h-[4px] w-full bg-[#1d1d1b]" />
      <div className="px-[24px] py-[28px] flex flex-col gap-[20px] items-center text-center">
        {/* Lock icon */}
        <div className="bg-[#1d1d1b] rounded-full p-[16px]">
          <IconLock color="white" size={28} />
        </div>
        <div className="flex flex-col gap-[8px]">
          <p className="font-['Figtree',sans-serif] font-extrabold text-[15px] text-[#1a1a2e]">Configuration Locked</p>
          <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#4a5568] leading-relaxed max-w-[300px]">
            The parent application has been changed. Further relationship changes are disabled until an approver reviews the new structure.
          </p>
        </div>

        {/* Disabled actions list */}
        <div className="w-full bg-[#f7fafc] border border-[#e2e8f0] rounded-[6px] overflow-hidden">
          <p className="font-['Figtree',sans-serif] font-semibold text-[11px] text-[#718096] uppercase px-[14px] py-[8px] border-b border-[#e2e8f0] text-left">Disabled actions</p>
          {disabledItems.map((item, i) => (
            <div key={item} className={`flex items-center gap-[10px] px-[14px] py-[10px] ${i < disabledItems.length - 1 ? "border-b border-[#e2e8f0]" : ""}`}>
              <IconLock color="#cbd5e0" size={12} />
              <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#a0aec0] line-through">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <button onClick={onClose} className="px-[32px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-bold text-[13px] bg-[#1d1d1b] text-white hover:bg-[#333] transition-colors w-full">
          Close
        </button>
      </div>
    </Modal>
  );
}

// ─── Popup 8: Submit for Review ──────────────────────────────────────────────

function ReviewSubmitModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  return (
    <Modal onClose={onClose} width="max-w-[440px]">
      <ModalHeader title="Submit for Review?" onClose={onClose} />
      <div className="px-[24px] py-[24px] flex flex-col gap-[16px] items-center text-center">
        <div className="bg-[#e6fffa] rounded-full p-[14px]">
          <IconCheck color="#00bfa5" size={28} />
        </div>
        <div className="flex flex-col gap-[6px]">
          <p className="font-['Figtree',sans-serif] font-bold text-[15px] text-[#1a1a2e]">Submit this application for review?</p>
          <p className="font-['Figtree',sans-serif] font-normal text-[13px] text-[#4a5568] leading-relaxed">
            This will submit the current group review configuration and move the application to Step 6 (Review &amp; Submit). The group structure will be locked until it has been reviewed and approved.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-[10px] px-[24px] py-[16px] border-t border-[#e2e8f0]">
        <BtnSecondary label="Cancel" onClick={onClose} />
        <button onClick={onConfirm} className="px-[20px] py-[9px] rounded-[6px] font-['Figtree',sans-serif] font-extrabold text-[13px] text-black bg-[#ffd100] hover:bg-[#f5c800] transition-colors">
          Submit for Review
        </button>
      </div>
    </Modal>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

type GroupStatus = "Active" | "Inactive" | "Pending Re-review";
type Group = { id: number; name: string; createdBy: string; applications: number; status: GroupStatus; lastUpdated: string };

const groups: Group[] = [
  { id: 0, name: "ABC Holdings",       createdBy: "John Tan",    applications: 8,  status: "Active",            lastUpdated: "12 Jan 2026" },
  { id: 1, name: "Global Ventures",    createdBy: "Sarah Lim",   applications: 12, status: "Active",            lastUpdated: "08 Jan 2026" },
  { id: 2, name: "XYZ Group",          createdBy: "Michael Lee", applications: 4,  status: "Pending Re-review", lastUpdated: "05 Jan 2026" },
  { id: 3, name: "Strategic Partners", createdBy: "Nor Aisyah",  applications: 6,  status: "Inactive",          lastUpdated: "20 Dec 2025" },
  { id: 4, name: "Enterprise Clients", createdBy: "David Wong",  applications: 10, status: "Active",            lastUpdated: "18 Dec 2025" },
];

type ChildRow = { id: string; name: string; statusLabel: string; bg: string; fg: string };
type GroupStructure = {
  parentId: string;
  parentName: string;
  parentStatus: { label: string; bg: string; fg: string };
  owner: string;
  createdDate: string;
  children: ChildRow[];
};

const groupStructures: Record<number, GroupStructure> = {
  0: { // ABC Holdings
    parentId: "APP-2026-00123",
    parentName: "Working Capital Facility",
    parentStatus: { label: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
    owner: "John Tan (RM)",
    createdDate: "12 Jan 2024",
    children: [
      { id: "APP-2026-00124", name: "Term Loan Facility",       statusLabel: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00125", name: "Trade Finance Facility",   statusLabel: "Submitted",   bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00126", name: "Guarantee Facility",       statusLabel: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00127", name: "Cash Management Facility", statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
    ],
  },
  1: { // Global Ventures
    parentId: "APP-2026-00210",
    parentName: "Foreign Exchange Facility",
    parentStatus: { label: "Submitted", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
    owner: "Sarah Lim (RM)",
    createdDate: "03 Jan 2024",
    children: [
      { id: "APP-2026-00211", name: "Letters of Credit",        statusLabel: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00212", name: "Trade Finance Facility",   statusLabel: "Submitted",   bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00213", name: "Bank Guarantee",           statusLabel: "Approved",    bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00214", name: "Asset-Backed Financing",   statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
    ],
  },
  2: { // XYZ Group
    parentId: "APP-2026-00301",
    parentName: "Revolving Credit Facility",
    parentStatus: { label: "Pending Re-review", bg: "bg-[#fef3c7]", fg: "text-[#92400e]" },
    owner: "Michael Lee (RM)",
    createdDate: "22 Dec 2025",
    children: [
      { id: "APP-2026-00302", name: "Term Loan Facility",     statusLabel: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00303", name: "Equipment Financing",    statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
      { id: "APP-2026-00304", name: "Trade Finance Facility", statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
      { id: "APP-2026-00305", name: "Bank Guarantee",         statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
    ],
  },
  3: { // Strategic Partners
    parentId: "APP-2025-00410",
    parentName: "Asset-Backed Financing",
    parentStatus: { label: "Draft", bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
    owner: "Nor Aisyah (RM)",
    createdDate: "15 Nov 2025",
    children: [
      { id: "APP-2025-00411", name: "Invoice Financing",        statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
      { id: "APP-2025-00412", name: "Working Capital Facility", statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
      { id: "APP-2025-00413", name: "Term Loan Facility",       statusLabel: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2025-00414", name: "Trade Finance Facility",   statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
    ],
  },
  4: { // Enterprise Clients
    parentId: "APP-2026-00501",
    parentName: "Corporate Overdraft Facility",
    parentStatus: { label: "Approved", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
    owner: "David Wong (RM)",
    createdDate: "10 Dec 2025",
    children: [
      { id: "APP-2026-00502", name: "Term Loan Facility",         statusLabel: "Approved",    bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00503", name: "Trade Finance Facility",     statusLabel: "In Progress", bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00504", name: "Equipment Financing",        statusLabel: "Submitted",   bg: "bg-[#e6fffa]", fg: "text-[#00bfa5]" },
      { id: "APP-2026-00505", name: "Cash Management Facility",   statusLabel: "Draft",       bg: "bg-[#edf2f7]", fg: "text-[#4a5568]" },
    ],
  },
};

type AuditEventType = "created" | "added" | "completed" | "selected" | "submitted" | "comment" | "changed";

const auditEventStyles: Record<AuditEventType, { bg: string; render: () => React.ReactNode }> = {
  created:   { bg: "bg-[#1d1d1b]",   render: () => <IconFileTextSm color="white" /> },
  added:     { bg: "bg-[#edf2f7]",   render: () => <IconPlus color="#718096" /> },
  completed: { bg: "bg-[#e6fffa]",   render: () => <IconCheck color="#00bfa5" /> },
  selected:  { bg: "bg-[#fff9e6]",   render: () => <IconStar /> },
  submitted: { bg: "bg-[#151a20]",   render: () => <IconHistory color="white" /> },
  comment:   { bg: "bg-[#ebf8ff]",   render: () => <IconUser color="#3182ce" /> },
  changed:   { bg: "bg-[#fef3c7]",   render: () => <IconAlertTriangle color="#92400e" size={14} /> },
};

const auditTrailEvents: { type: AuditEventType; title: string; description: string; actor: string; timestamp: string }[] = [
  {
    type: "submitted",
    title: "Application submitted for group review",
    description: "Step 5 of 6 (Group Review Configuration) was completed and the application moved to Review & Submit.",
    actor: "John Tan",
    timestamp: "12 Jan 2026, 10:42 AM",
  },
  {
    type: "added",
    title: "Child application added",
    description: "Cash Management Facility (APP-2026-00127) was added under ABC Holdings.",
    actor: "John Tan",
    timestamp: "10 Jan 2026, 3:15 PM",
  },
  {
    type: "added",
    title: "Child application added",
    description: "Guarantee Facility (APP-2026-00126) was added under ABC Holdings.",
    actor: "John Tan",
    timestamp: "10 Jan 2026, 2:58 PM",
  },
  {
    type: "added",
    title: "Child application added",
    description: "Trade Finance Facility (APP-2026-00125) was added under ABC Holdings.",
    actor: "John Tan",
    timestamp: "10 Jan 2026, 2:40 PM",
  },
  {
    type: "added",
    title: "Child application added",
    description: "Term Loan Facility (APP-2026-00124) was added under ABC Holdings.",
    actor: "John Tan",
    timestamp: "10 Jan 2026, 2:12 PM",
  },
  {
    type: "selected",
    title: "Group selected",
    description: "ABC Holdings was selected as the customer group for this application.",
    actor: "John Tan",
    timestamp: "10 Jan 2026, 1:50 PM",
  },
  {
    type: "changed",
    title: "Group review marked as required",
    description: "Group review was set to required, based on the customer's group relationship with ABC Holdings.",
    actor: "John Tan",
    timestamp: "10 Jan 2026, 1:45 PM",
  },
  {
    type: "completed",
    title: "Document checklist completed",
    description: "All required supporting documents were uploaded and verified.",
    actor: "John Tan",
    timestamp: "09 Jan 2026, 4:30 PM",
  },
  {
    type: "completed",
    title: "Facility & Conditions submitted",
    description: "Facility amount, tenure, and conditions were submitted for Working Capital Facility.",
    actor: "John Tan",
    timestamp: "08 Jan 2026, 11:20 AM",
  },
  {
    type: "comment",
    title: "Customer information verified",
    description: "KYC and customer profile details were cross-checked against core banking records — no discrepancies found.",
    actor: "Sarah Lim (Credit Ops)",
    timestamp: "07 Jan 2026, 9:05 AM",
  },
  {
    type: "created",
    title: "Application created",
    description: "Application APP-2026-00123 (Working Capital Facility) was created for ABC Holdings.",
    actor: "John Tan",
    timestamp: "05 Jan 2026, 9:00 AM",
  },
];

// ─── Audit Trail drawer ───────────────────────────────────────────────────────

function AuditTrailDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-[#1a1a2e]/50" onClick={onClose} />
      <div className="relative bg-white h-full w-full max-w-[440px] shadow-xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="flex items-center justify-between px-[24px] py-[20px] border-b border-[#e2e8f0] shrink-0">
          <div className="flex items-center gap-[10px]">
            <IconHistory color="#1a1a2e" />
            <p className="font-['Figtree',sans-serif] font-bold text-[16px] text-[#1a1a2e]">Audit Trail</p>
          </div>
          <button onClick={onClose} className="p-[4px] hover:bg-gray-100 rounded-[4px] transition-colors"><IconX /></button>
        </div>

        <div className="px-[24px] py-[14px] border-b border-[#e2e8f0] shrink-0 bg-[#f7fafc]">
          <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">APP-2026-00123 — Working Capital Facility</p>
          <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#718096] mt-[2px]">{auditTrailEvents.length} events recorded</p>
        </div>

        <div className="flex-1 overflow-y-auto px-[24px] py-[20px]">
          <div className="flex flex-col">
            {auditTrailEvents.map((event, i) => {
              const style = auditEventStyles[event.type];
              const isLast = i === auditTrailEvents.length - 1;
              return (
                <div key={i} className="relative flex gap-[12px] pb-[24px]">
                  {!isLast && <div className="absolute left-[13px] top-[28px] bottom-0 w-px bg-[#e2e8f0]" />}
                  <div className={`relative shrink-0 size-[28px] rounded-full flex items-center justify-center ${style.bg}`}>
                    {style.render()}
                  </div>
                  <div className="flex flex-col gap-[3px] pt-[2px] min-w-0">
                    <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#1a1a2e]">{event.title}</p>
                    <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#4a5568] leading-relaxed">{event.description}</p>
                    <p className="font-['Figtree',sans-serif] font-normal text-[11px] text-[#a0aec0] mt-[2px]">{event.actor} · {event.timestamp}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Status badge ─────────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: GroupStatus }) {
  const styles: Record<GroupStatus, { bg: string; text: string }> = {
    "Active":            { bg: "bg-[#e6fffa]", text: "text-[#38a169]" },
    "Inactive":          { bg: "bg-[#edf2f7]", text: "text-[#718096]" },
    "Pending Re-review": { bg: "bg-[#fef3c7]", text: "text-[#92400e]" },
  };
  const s = styles[status];
  return (
    <div className={`content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0 ${s.bg}`}>
      <p className={`font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${s.text}`}>{status}</p>
    </div>
  );
}

// ─── Sidebar ────────────────────────────────────────────────────��────────────

function Sidebar() {
  const steps = [
    { n: 1, label: "Application Details" },
    { n: 2, label: "Customer Information" },
    { n: 3, label: "Facility & Conditions" },
    { n: 4, label: "Document Checklist" },
    { n: 5, label: "Group Review Configuration", active: true },
  ];
  const connectorHeights = [28, 28, 28, 35];
  return (
    <div className="bg-[#151a20] flex flex-col gap-[32px] items-start h-full shrink-0 w-[280px] overflow-y-auto">
      <div className="aspect-[1122/252] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage2} />
      </div>
      <div className="relative shrink-0 w-full">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-start leading-[normal] not-italic px-[24px] relative size-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap">
            <p className="font-['Figtree',sans-serif] font-semibold opacity-60 relative shrink-0 text-[#98a9a6] text-[11px] uppercase">Application ID</p>
            <p className="font-['Figtree',sans-serif] font-bold relative shrink-0 text-[15px] text-white">APP-2026-00123</p>
          </div>
          <div className="content-stretch flex flex-col font-['Figtree',sans-serif] font-semibold gap-[4px] items-start relative shrink-0 w-full">
            <p className="opacity-60 relative shrink-0 text-[#98a9a6] text-[11px] uppercase whitespace-nowrap">Application Name</p>
            <p className="min-w-full relative shrink-0 text-[15px] text-white w-[min-content]">Working Capital Facility</p>
          </div>
          <div className="content-stretch flex flex-col font-['Figtree',sans-serif] font-semibold gap-[4px] items-start relative shrink-0 w-full whitespace-nowrap">
            <p className="opacity-60 relative shrink-0 text-[#98a9a6] text-[11px] uppercase">Product Type</p>
            <p className="relative shrink-0 text-[15px] text-white">Corporate Financing</p>
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div aria-hidden className="absolute border-[rgba(226,232,240,0.1)] border-b border-solid border-t inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[24px] py-[35px] relative size-full">
          {steps.map((step) => (
            <div key={step.n} className="relative rounded-[8px] shrink-0 w-full">
              <div className="flex flex-row items-center size-full">
                <div className={`content-stretch flex gap-[12px] items-center relative size-full ${step.active ? "pb-[12px] pt-[11px] px-[12px]" : "p-[12px]"}`}>
                  <div className={`content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[24px] ${step.active ? "bg-[#ffd100]" : ""}`}>
                    {!step.active && <div aria-hidden className="absolute border border-[#22a675] border-solid inset-0 pointer-events-none rounded-[12px]" />}
                    <p className={`font-['Figtree',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${step.active ? "text-[#050400]" : "text-[#22a675]"}`}>{step.n}</p>
                  </div>
                  <p className={`[word-break:break-word] leading-[normal] min-w-px not-italic relative text-[14px] ${step.active ? "font-['Figtree',sans-serif] font-semibold text-white w-[184px]" : "flex-[1_0_0] font-['Figtree',sans-serif] font-normal text-[rgba(255,255,255,0.5)]"}`}>
                    {step.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {connectorHeights.map((h, i) => (
            <div key={i} className="absolute flex items-center justify-center left-[47.5px] w-0" style={{ height: h, top: [71, 122.5, 175.5, 226.5][i] }}>
              <div className="flex-none rotate-90">
                <div className="h-0 relative" style={{ width: h }}>
                  <div className="absolute inset-[-1px_0_0_0]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${h} 1`}>
                      <line stroke="#22A675" x2={h} y1="0.5" y2="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-[12px] items-start pb-[24px] pt-[24px] px-[24px] mt-auto shrink-0 w-[280px]">
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-start leading-[normal] not-italic relative shrink-0">
          <p className="font-['Figtree',sans-serif] font-semibold relative shrink-0 text-[12px] text-white whitespace-nowrap">Need Help?</p>
          <p className="font-['Figtree',sans-serif] font-normal relative shrink-0 text-[11px] text-[rgba(255,255,255,0.5)] w-[178px]">View user guide or contact Business Support.</p>
        </div>
        <div className="relative rounded-[6px] shrink-0 w-full">
          <div aria-hidden className="absolute border border-[#272c31] border-solid inset-0 pointer-events-none rounded-[6px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative size-full">
              <IconHeadset />
              <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Contact Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Top Nav ─────────────────────────────────────────────────────────────────

function TopNav() {
  return (
    <div className="bg-white h-[64px] relative shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] sm:pl-[21px] sm:pr-[24px] lg:pr-[40px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#718096] text-[13px] whitespace-nowrap">Application Generation</p>
            <IconChevronRight size={12} />
            <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#718096] text-[13px] whitespace-nowrap">Step 5 of 6</p>
            <IconChevronRight size={12} />
            <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1d1d1b] text-[13px] whitespace-nowrap">Group Review Configuration</p>
          </div>
          <div className="content-stretch flex gap-[24px] items-center relative shrink-0">
            <IconHelpCircle />
            <IconBell />
            <div className="content-stretch flex gap-[12px] items-center relative shrink-0">
              <div className="bg-[#151a20] content-stretch flex items-center justify-center relative rounded-[99px] shrink-0 size-[32px]">
                <p className="font-['Figtree',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[11px] text-white whitespace-nowrap">JT</p>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
                <p className="font-['Figtree',sans-serif] font-semibold relative shrink-0 text-[#1d1d1b] text-[13px]">John Tan</p>
                <p className="font-['Figtree',sans-serif] font-normal relative shrink-0 text-[#718096] text-[11px]">Relationship Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section 1 ────────────────────────────────────────────────────────────────

function GroupRequiredCard() {
  return (
    <div className="bg-white flex-[1_0_0] min-w-px relative rounded-[4px]">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col lg:flex-row gap-[24px] lg:gap-[96px] items-start p-[24px] relative size-full">
        <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 w-full lg:w-auto">
          <p className="[word-break:break-word] col-1 font-['Figtree',sans-serif] font-extrabold leading-[normal] ml-0 mt-0 not-italic relative row-1 text-[14px] text-black w-full max-w-[335.526px]">1. Group Review Required?</p>
          <div className="col-1 content-stretch flex flex-col gap-[10px] items-start ml-0 mt-[20px] pt-[15px] relative row-1 w-full max-w-[450px]">
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
              <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]">
                <div aria-hidden className="absolute border-[5px] border-[#f6ad55] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
              <p className="font-['Figtree',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">Yes, require group review</p>
            </div>
            <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
              <div className="bg-white relative rounded-[10px] shrink-0 size-[20px]">
                <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[10px]" />
              </div>
              <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">No, do not require group review</p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[20px] items-start pl-0 lg:pl-[54px] pt-[24px] lg:pt-0 relative shrink-0 w-full lg:w-[626px]">
          <div aria-hidden className="absolute border-[#98a9a6] border-t lg:border-t-0 lg:border-l border-solid inset-0 pointer-events-none" />
          <div className="[word-break:break-word] content-stretch flex gap-[8px] items-center leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap">
            <p className="font-['Figtree',sans-serif] font-extrabold relative shrink-0 text-[14px]">Customer Group Information</p>
            <p className="font-['Figtree',sans-serif] font-normal relative shrink-0 text-[13px]">(Read-only)</p>
          </div>
          <div className="content-stretch flex flex-wrap gap-[40px] items-start relative shrink-0 w-full">
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree',sans-serif] font-semibold gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
              <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Customer Group</p>
              <p className="relative shrink-0 text-[14px] text-black">ABC Holdings</p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree',sans-serif] font-semibold gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
              <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Sub Group</p>
              <p className="relative shrink-0 text-[14px] text-black">Corporate Banking</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section 2 ────────────────────────────────────────────────────────────────

function SelectGroupCard({
  selectedId,
  onSelect,
  onCreateGroup,
}: {
  selectedId: number | null;
  onSelect: (id: number) => void;
  onCreateGroup: () => void;
}) {
  return (
    <div className="bg-white relative rounded-[4px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[7px] items-start px-[24px] py-[12px] relative size-full">
        <div className="content-stretch flex flex-col lg:flex-row lg:items-center justify-between gap-[12px] relative shrink-0 w-full">
          <p className="font-['Figtree',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">2. Select or Create Group</p>
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full lg:w-[554px]">
            <div className="bg-[#f7fafc] content-stretch flex gap-[8px] h-[36px] items-center px-[12px] relative rounded-[6px] shrink-0 flex-1 min-w-0 lg:w-[377px]">
              <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[13px] text-black">Search group name or created by</p>
              <IconSearch />
            </div>
            <div onClick={onCreateGroup} className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <IconPlus />
              <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2d3d] text-[13px] whitespace-nowrap">Create New Group</p>
            </div>
          </div>
        </div>

        <div className="relative rounded-[4px] shrink-0 w-full overflow-x-auto">
          <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full min-w-[760px]">
            <div className="bg-[#f7fafc] relative shrink-0 w-full">
              <div className="[word-break:break-word] content-stretch flex font-['Figtree',sans-serif] font-bold items-start justify-between leading-[normal] not-italic px-[16px] py-[12px] relative size-full text-[#718096] text-[11px]">
                <p className="relative shrink-0 w-[220px]">GROUP NAME</p>
                <p className="relative shrink-0 w-[140px]">CREATED BY</p>
                <p className="relative shrink-0 w-[80px]">APPLICATIONS</p>
                <p className="relative shrink-0 w-[120px]">STATUS</p>
                <p className="relative shrink-0 text-right w-[143px]">LAST UPDATED</p>
              </div>
            </div>
            {groups.map((group) => {
              const isSelected = selectedId !== null && group.id === selectedId;
              const isPending = group.status === "Pending Re-review";
              return (
                <div
                  key={group.id}
                  className={`relative shrink-0 w-full cursor-pointer transition-colors duration-150 ${
                    isSelected ? (isPending ? "bg-[#fffbeb]" : "bg-[#fff9e6]") : "bg-transparent hover:bg-[#fafafa]"
                  }`}
                  onClick={() => onSelect(group.id)}
                >
                  <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
                      <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[220px]">
                        <IconFileText size={16} />
                        <p className="font-['Figtree',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#1d1d1b] text-[13px] whitespace-nowrap">{group.name}</p>
                      </div>
                      <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1b] text-[13px] w-[140px]">{group.createdBy}</p>
                      <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1b] text-[13px] w-[80px]">{group.applications}</p>
                      <div className="content-stretch flex items-start relative shrink-0 w-[120px]">
                        <StatusBadge status={group.status} />
                      </div>
                      <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[140px]">
                        <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#1d1d1b] text-[13px] whitespace-nowrap">{group.lastUpdated}</p>
                        <IconChevronRight size={14} color={isSelected ? "#1D1D1B" : "#718096"} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div aria-hidden className="absolute border-[1px] border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
        </div>

        <div className="content-stretch flex flex-wrap items-center justify-between gap-y-[8px] relative shrink-0 w-full">
          <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#718096] text-[12px] whitespace-nowrap">Showing 1 to 5 of 25 groups</p>
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
            <IconChevronLeft size={16} />
            <div className="bg-[#ffd100] content-stretch flex items-center justify-center relative rounded-[4px] shrink-0 size-[28px]">
              <p className="font-['Figtree',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[12px] text-black whitespace-nowrap">1</p>
            </div>
            {["2", "3", "...", "5"].map((p) => (
              <p key={p} className="font-['Figtree',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#718096] text-[12px] whitespace-nowrap cursor-pointer hover:text-[#1d1d1b]">{p}</p>
            ))}
            <IconChevronRight size={16} color="#1D1D1B" />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section 3 sub-components ─────────────────────────────────────────────────

function StructureEmptyState({ isLocked = false }: { isLocked?: boolean }) {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[32px] items-center py-[40px] relative size-full">
      <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
        <div className="relative shrink-0">
          <div className="bg-[#edf2f7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[60px]">
            <div className="relative shrink-0 size-[32px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <path d={emptyStatePaths.p2e3dcf80} stroke="#718096" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          {isLocked && (
            <div className="absolute bg-[#151a20] content-stretch flex items-center justify-center rounded-[99px] size-[32px]" style={{ bottom: -10, right: -10 }}>
              <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[99px]" />
              <div className="relative shrink-0 size-[14px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                  <g clipPath="url(#clip-es-lock)">
                    <path d={emptyStatePaths.p28fe0540} stroke="white" strokeLinecap="round" strokeWidth="2" />
                  </g>
                  <defs><clipPath id="clip-es-lock"><rect fill="white" height="14" width="14" /></clipPath></defs>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="[word-break:break-word] font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#718096] text-[14px] text-center w-[340px]">
        Please select a group from Section 2 to view and manage the group structure.
      </p>
    </div>
  );
}

function StructureTree({ locked, groupName, applicationsCount, structure }: { locked: boolean; groupName: string; applicationsCount: number; structure: GroupStructure }) {
  return (
    <div className={`content-stretch flex flex-col gap-[12px] h-auto items-start pb-[10px] pl-[10px] pr-[25px] pt-[20px] relative shrink-0 lg:w-[301px] w-full ${locked ? "opacity-60" : ""}`}>
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full">
        <IconMinusSquare size={16} />
        <IconFolder />
        <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree',sans-serif] font-bold leading-[normal] min-w-px not-italic relative text-[14px] text-black">{groupName}</p>
        <div className="bg-[#ffd100] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]">
          <p className="font-['Figtree',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">{applicationsCount}</p>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pl-[52px] relative size-full">
          <div className="content-stretch flex flex-col items-end relative shrink-0 w-[218px]">
            <div className="bg-[#fff9e5] relative rounded-[6px] shrink-0 w-full">
              <div aria-hidden className="absolute border-[#ffd100] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
              <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
                <div className="absolute left-[-21.5px] size-[14px] top-[16px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p34782800} stroke="#718096" strokeLinecap="round" />
                  </svg>
                </div>
                <IconStar />
                <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap">
                  <p className="font-['Figtree',sans-serif] font-bold relative shrink-0 text-[13px]">{structure.parentId} (Parent)</p>
                  <p className="font-['Figtree',sans-serif] font-normal relative shrink-0 text-[12px]">{structure.parentName}</p>
                </div>
              </div>
            </div>
          </div>
          {structure.children.map((child) => (
            <div key={child.id} className="content-stretch flex gap-[12px] items-center pl-[24px] relative shrink-0">
              <IconFileTextSm />
              <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap">
                <p className="font-['Figtree',sans-serif] font-semibold relative shrink-0 text-[13px]">{child.id}</p>
                <p className="font-['Figtree',sans-serif] font-normal relative shrink-0 text-[12px]">{child.name}</p>
              </div>
            </div>
          ))}
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
            <p className={`font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[12px] whitespace-nowrap ${locked ? "text-[#a0aec0]" : "text-[#3182ce]"}`}>View all {applicationsCount} applications</p>
            <div className="relative shrink-0 size-[12px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <path d="M4.5 9L7.5 6L4.5 3" stroke={locked ? "#a0aec0" : "#3182CE"} strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </div>
          {/* Dashed connectors */}
          <div className="absolute flex h-[215px] items-center justify-center left-[37px] top-[-15px] w-0">
            <div className="flex-none rotate-90"><div className="h-0 relative w-[215px]"><div className="absolute inset-[-1px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215 1"><line stroke="#718096" strokeDasharray="2 2" x2="215" y1="0.5" y2="0.5" /></svg></div></div></div>
          </div>
          <div className="absolute flex h-[37px] items-center justify-center left-[8px] top-[-14px] w-0">
            <div className="flex-none rotate-90"><div className="h-0 relative w-[37px]"><div className="absolute inset-[-1px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 1"><line stroke="#718096" strokeDasharray="2 2" x2="37" y1="0.5" y2="0.5" /></svg></div></div></div>
          </div>
          {[{ left: 8, top: 22, w: 24 }, { left: 37, top: 73, w: 41 }, { left: 37, top: 116, w: 41 }, { left: 37, top: 157, w: 41 }, { left: 37.5, top: 199, w: 41 }].map((ln, i) => (
            <div key={i} className="absolute flex h-0 items-center justify-center" style={{ left: ln.left, top: ln.top, width: ln.w }}>
              <div className="flex-none rotate-180"><div className="h-0 relative" style={{ width: ln.w }}><div className="absolute inset-[-1px_0_0_0]"><svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox={`0 0 ${ln.w} 1`}><line stroke="#718096" strokeDasharray="2 2" x2={ln.w} y1="0.5" y2="0.5" /></svg></div></div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StructureDetail({ locked, structure, onRemoveChild }: { locked: boolean; structure: GroupStructure; onRemoveChild: (id: string) => void }) {
  const fields: { label: string; value: string | null; badge: boolean }[] = [
    { label: "Status",           value: null,                  badge: true  },
    { label: "Application ID",   value: structure.parentId,    badge: false },
    { label: "Application Name", value: structure.parentName,  badge: false },
    { label: "Application Type", value: "Parent Application",  badge: false },
    { label: "Owner",            value: structure.owner,        badge: false },
    { label: "Created Date",     value: structure.createdDate,  badge: false },
  ];
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] items-start min-w-[660px] py-[20px] relative">
      <div className="min-h-[51px] relative shrink-0 w-full pb-[12px]">
        <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
        <div className="content-stretch flex flex-col items-start pl-[10px] relative size-full">
          <div className="content-start flex flex-wrap gap-[19.5px_35px] items-start relative shrink-0 w-full">
            {fields.map((f) => (
              <div key={f.label} className="[word-break:break-word] content-stretch flex flex-col font-['Figtree',sans-serif] font-semibold gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap">
                <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">{f.label}</p>
                {f.badge ? (
                  <div className={`content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0 ${structure.parentStatus.bg}`}>
                    <p className={`font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${structure.parentStatus.fg}`}>{structure.parentStatus.label}</p>
                  </div>
                ) : (
                  <p className="relative shrink-0 text-[14px] text-black">{f.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pl-[10px] relative size-full">
          <p className="capitalize font-['Figtree',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap">Child Applications ({structure.children.length})</p>
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full overflow-x-auto">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
            <div className="bg-[#f7fafc] relative shrink-0 w-full min-w-[640px]">
              <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
              <div className="[word-break:break-word] grid grid-cols-[130px_minmax(0,1fr)_120px_100px_80px] font-['Figtree',sans-serif] font-semibold items-start leading-[normal] not-italic px-[12px] py-[8px] relative size-full text-[11px] text-[#718096] uppercase">
                <p className="relative">Application ID</p>
                <p className="relative">Application Name</p>
                <p className="relative">Status</p>
                <p className="relative">Owner</p>
                <p className="relative">Actions</p>
              </div>
            </div>
            {structure.children.map((row) => (
              <div key={row.id} className={`relative shrink-0 w-full min-w-[640px] transition-colors ${locked ? "cursor-default" : "cursor-pointer hover:bg-[#fafafa]"}`}>
                <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
                <div className="flex flex-row items-center size-full">
                  <div className="grid grid-cols-[130px_minmax(0,1fr)_120px_100px_80px] items-center px-[12px] py-[10px] relative size-full">
                    <p className={`font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative text-[13px] ${locked ? "text-[#a0aec0]" : "text-black"}`}>{row.id}</p>
                    <p className={`[word-break:break-word] font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative text-[13px] pr-[12px] ${locked ? "text-[#a0aec0]" : "text-black"}`}>{row.name}</p>
                    <div className="content-stretch flex items-start relative">
                      <div className={`content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0 ${locked ? "bg-[#edf2f7]" : row.bg}`}>
                        <p className={`font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] whitespace-nowrap ${locked ? "text-[#a0aec0]" : row.fg}`}>{row.statusLabel}</p>
                      </div>
                    </div>
                    <p className={`font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative text-[13px] ${locked ? "text-[#a0aec0]" : "text-black"}`}>{structure.owner.replace(" (RM)", "")}</p>
                    <div className="content-stretch flex gap-[12px] items-center relative">
                      <div className={locked ? "pointer-events-none" : ""}><IconEdit disabled={locked} /></div>
                      <div
                        className={locked ? "pointer-events-none" : "cursor-pointer"}
                        onClick={locked ? undefined : () => onRemoveChild(row.id)}
                      >
                        <IconTrash disabled={locked} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="font-['Figtree',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#718096] text-[12px] whitespace-nowrap">Showing 1 to {structure.children.length} of {structure.children.length} applications</p>
        </div>
      </div>
    </div>
  );
}

// ─── Section 3: Structure Manager card ───────────────────────────────────────

function StructureManagerCard({
  group,
  isLocked,
  isConfigLocked,
  onChangeParent,
  onAddChild,
  onRemoveChild,
}: {
  group: Group | null;
  isLocked: boolean;
  isConfigLocked: boolean;
  onChangeParent: () => void;
  onAddChild: () => void;
  onRemoveChild: (id: string) => void;
}) {
  const hasSelection = group !== null;
  const structure = group ? groupStructures[group.id] : null;
  const effectiveLocked = isLocked || isConfigLocked;
  const lockedChipLabel = isConfigLocked ? "Configuration Locked" : "Locked — Pending Re-review";

  return (
    <div className="bg-white relative rounded-[4px] w-full">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[20px] items-start px-[24px] py-[12px] relative w-full">

        {/* Header */}
        <div className="content-stretch flex flex-col lg:flex-row lg:items-center justify-between gap-[12px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full lg:w-[315px]">
            <div className="content-stretch flex gap-[2.5px] items-center relative shrink-0">
              <p className="font-['Figtree',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">3. Group Structure Manager</p>
              {effectiveLocked && (
                <div className="bg-[#fef3c7] content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                  <IconLock color="#92400e" size={10} />
                  <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[11px] text-[#92400e] whitespace-nowrap">{lockedChipLabel}</p>
                </div>
              )}
            </div>
            <p className="font-['Figtree',sans-serif] font-normal leading-[normal] min-w-full not-italic relative shrink-0 text-[#718096] text-[11px] w-[min-content]">Manage parent and child applications within the selected group.</p>
          </div>

          <div className="content-stretch flex flex-wrap gap-[12px] items-center relative shrink-0">
            {/* Change Parent */}
            {hasSelection && !effectiveLocked ? (
              <div onClick={onChangeParent} className="content-stretch flex items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
                <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2d3d] text-[13px] whitespace-nowrap">Change Parent Application</p>
              </div>
            ) : (
              <div className="bg-[#edf2f7] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0 pointer-events-none">
                <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a0aec0] text-[13px] whitespace-nowrap">Change Parent Application</p>
              </div>
            )}
            {/* Add Child */}
            {hasSelection && !effectiveLocked ? (
              <div onClick={onAddChild} className="bg-[#1d1d1b] content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-[#333] transition-colors">
                <div className="relative shrink-0 size-[14px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p133cc000} stroke="white" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className="font-['Figtree',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Add Child Application</p>
               
              </div>
            ) : (
              <div className="bg-[#edf2f7] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0 pointer-events-none">
                <div className="relative shrink-0 size-[14px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={emptyStatePaths.p133cc000} stroke="#a0aec0" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
                <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a0aec0] text-[13px] whitespace-nowrap">Add Child Application</p>
              </div>
            )}
          </div>
        </div>

        {/* Body */}
        {!hasSelection ? (
          <StructureEmptyState isLocked={effectiveLocked} />
        ) : (
          <div className="flex flex-col gap-0 w-full">
            {/* Locked banners */}
            {isConfigLocked && (
              <div className="w-full bg-[#1d1d1b] rounded-[6px] px-[16px] py-[12px] flex items-start gap-[12px] mb-[16px]">
                <div className="shrink-0 mt-[1px]"><IconLock color="white" size={14} /></div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-white">Configuration locked — further relationship changes are disabled.</p>
                  <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[rgba(255,255,255,0.6)] leading-relaxed">The parent application was changed. An approver must review and approve the new hierarchy before any edits can be made. Check the Approvals queue.</p>
                </div>
              </div>
            )}
            {isLocked && !isConfigLocked && (
              <div className="w-full bg-[#fffbeb] border border-[#fcd34d] rounded-[6px] px-[16px] py-[12px] flex items-start gap-[12px] mb-[16px]">
                <div className="shrink-0 mt-[1px]"><IconAlertTriangle color="#b45309" size={18} /></div>
                <div className="flex flex-col gap-[4px]">
                  <p className="font-['Figtree',sans-serif] font-semibold text-[13px] text-[#92400e]">This group structure is locked and pending re-review.</p>
                  <p className="font-['Figtree',sans-serif] font-normal text-[12px] text-[#b45309] leading-relaxed">
                    The parent application was changed on <span className="font-['Figtree',sans-serif] font-semibold">05 Jan 2026</span>. An approver must review and approve the new structure before further changes can be made.
                  </p>
                </div>
              </div>
            )}

            {group && structure && (
              <div className="bg-white content-stretch flex min-h-0 h-full items-start relative rounded-[4px] shrink-0 w-full overflow-x-auto">
                <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <StructureTree locked={effectiveLocked} groupName={group.name} applicationsCount={group.applications} structure={structure} />
                <StructureDetail locked={effectiveLocked} structure={structure} onRemoveChild={onRemoveChild} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function PageFooter({ onReviewSubmit, hasSelection }: { onReviewSubmit: () => void; hasSelection: boolean }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div aria-hidden className="absolute border-[#e2e8f0] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] sm:px-[24px] lg:px-[40px] py-[20px] relative size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
            <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
            <IconChevronLeft size={14} color="#1F2D3D" />
            <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2d3d] text-[13px] whitespace-nowrap">Back</p>
          </div>
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0">
            <div
              title={!hasSelection ? "Select a group in Section 2 first" : undefined}
              className={`content-stretch flex items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 transition-colors ${
                hasSelection ? "cursor-pointer hover:bg-gray-50" : "cursor-not-allowed pointer-events-none"
              }`}
            >
              <div aria-hidden className={`absolute border border-solid inset-0 pointer-events-none rounded-[6px] ${hasSelection ? "border-[#e2e8f0]" : "border-[#edf2f7]"}`} />
              <p className={`font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[13px] whitespace-nowrap ${hasSelection ? "text-[#1f2d3d]" : "text-[#a0aec0]"}`}>Save as Draft</p>
            </div>
            <div
              onClick={hasSelection ? onReviewSubmit : undefined}
              title={!hasSelection ? "Select a group in Section 2 first" : undefined}
              className={`content-stretch flex gap-[12px] items-center px-[24px] py-[12px] relative rounded-[6px] shrink-0 transition-colors ${
                hasSelection ? "bg-[#ffd100] cursor-pointer hover:bg-[#f5c800]" : "bg-[#edf2f7] cursor-not-allowed pointer-events-none"
              }`}
            >
              <p className={`font-['Figtree',sans-serif] font-extrabold leading-[normal] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${hasSelection ? "text-black" : "text-[#a0aec0]"}`}>{`Review & Submit`}</p>
              <div className="relative shrink-0 size-[16px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <path d="M6 12L10 8L6 4" stroke={hasSelection ? "#1D1D1B" : "#a0aec0"} strokeLinecap="round" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

type ModalKind =
  | "createGroup"
  | "addChild"
  | "conflict"
  | "removeChild"
  | "changeParent"
  | "parentWarning"
  | "configLocked"
  | "reviewSubmit"
  | null;

export default function App() {
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null);
  const [modal, setModal] = useState<ModalKind>(null);
  const [conflictGroup, setConflictGroup] = useState("");
  const [removeChildId, setRemoveChildId] = useState("");
  const [pendingNewParentId, setPendingNewParentId] = useState("");
  const [isConfigLocked, setIsConfigLocked] = useState(false);
  const [isAuditTrailOpen, setIsAuditTrailOpen] = useState(false);

  const selectedGroup = selectedGroupId !== null ? groups.find((g) => g.id === selectedGroupId) ?? null : null;
  const isLocked = selectedGroup?.status === "Pending Re-review";

  function closeModal() { setModal(null); }

  function handleConflict(groupName: string) {
    setConflictGroup(groupName);
    setModal("conflict");
  }

  function handleRemoveChild(id: string) {
    setRemoveChildId(id);
    setModal("removeChild");
  }

  function handleChangeParentContinue(newParentId: string) {
    setPendingNewParentId(newParentId);
    setModal("parentWarning");
  }

  function handleParentChangeConfirm() {
    setModal("configLocked");
  }

  function handleConfigLockedClose() {
    setIsConfigLocked(true);
    setModal(null);
  }

  function handleReviewSubmitConfirm() {
    setModal(null);
  }

  return (
    <div className="bg-[#f7fafc] flex items-start h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 min-w-0 min-h-0 h-full">
        <TopNav />
        <div className="flex-1 overflow-y-auto min-h-0">
          <div className="flex flex-col gap-[11px] items-start px-[16px] sm:px-[24px] lg:px-[40px] py-[14px]">
            {/* Page title */}
            <div className="content-stretch flex flex-wrap items-start justify-between gap-[12px] relative shrink-0 w-full">
              <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start leading-[normal] min-w-px not-italic relative">
                <p className="font-['Figtree',sans-serif] font-bold relative text-[24px] text-black">Group Review Configuration</p>
                <p className="font-['Figtree',sans-serif] font-normal relative shrink-0 text-[#4a5568] text-[14px] max-w-[925px]">Configure group review for this application. You can select an existing group or create a new group and manage child applications under the group.</p>
              </div>
              <div onClick={() => setIsAuditTrailOpen(true)} className="content-stretch flex gap-[8px] items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50 transition-colors">
                <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
                <IconHistory />
                <p className="font-['Figtree',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2d3d] text-[13px] whitespace-nowrap">View Audit Trail</p>
              </div>
            </div>

            <div className="content-stretch flex items-start relative shrink-0 w-full">
              <GroupRequiredCard />
            </div>

            <SelectGroupCard
              selectedId={selectedGroupId}
              onSelect={setSelectedGroupId}
              onCreateGroup={() => setModal("createGroup")}
            />

            <StructureManagerCard
              group={selectedGroup}
              isLocked={isLocked ?? false}
              isConfigLocked={isConfigLocked}
              onChangeParent={() => setModal("changeParent")}
              onAddChild={() => setModal("addChild")}
              onRemoveChild={handleRemoveChild}
            />
          </div>
        </div>
        <PageFooter onReviewSubmit={() => setModal("reviewSubmit")} hasSelection={selectedGroupId !== null} />
      </div>

      {/* Modals */}
      {modal === "createGroup"    && <CreateGroupModal onClose={closeModal} />}
      {modal === "addChild"       && <AddChildModal onClose={closeModal} onConflict={handleConflict} />}
      {modal === "conflict"       && <ConflictModal groupName={conflictGroup} onClose={closeModal} />}
      {modal === "removeChild"    && <RemoveChildModal appId={removeChildId} onClose={closeModal} />}
      {modal === "changeParent"   && <ChangeParentModal onClose={closeModal} onContinue={handleChangeParentContinue} />}
      {modal === "parentWarning"  && <ParentChangeWarningModal newParentId={pendingNewParentId} onClose={closeModal} onConfirm={handleParentChangeConfirm} />}
      {modal === "configLocked"   && <ConfigLockedModal onClose={handleConfigLockedClose} />}
      {modal === "reviewSubmit"   && <ReviewSubmitModal onClose={closeModal} onConfirm={handleReviewSubmitConfirm} />}

      {isAuditTrailOpen && <AuditTrailDrawer onClose={() => setIsAuditTrailOpen(false)} />}
      <Analytics />
    </div>
  );
}
