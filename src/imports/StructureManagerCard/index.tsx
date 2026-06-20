import svgPaths from "./svg-acd8hws0vk";

function Lock() {
  return (
    <div className="relative shrink-0 size-[10px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 10">
        <g clipPath="url(#clip0_1_346)" id="lock">
          <path d={svgPaths.p3b73c280} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_346">
            <rect fill="white" height="10" width="10" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Lock />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black whitespace-nowrap">Locked</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[2.5px] items-center relative shrink-0">
      <p className="[word-break:break-word] font-['Figtree:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-black whitespace-nowrap">3. Group Structure Manager</p>
      <Frame4 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Frame">
      <Frame3 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[315px]">
      <Frame1 />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] min-w-full not-italic relative shrink-0 text-[#718096] text-[11px] w-[min-content]">Manage parent and child applications within the selected group.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[10px] relative rounded-[6px] shrink-0" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1f2d3d] text-[13px] whitespace-nowrap">Change Parent Application</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="chevron-down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="chevron-down">
          <path d="M3.5 5.25L7 8.75L10.5 5.25" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="bg-[#1d1d1b] content-stretch flex gap-[12px] items-center px-[12px] py-[10px] relative rounded-[6px] shrink-0" data-name="Frame">
      <Plus />
      <p className="[word-break:break-word] font-['Figtree:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-white whitespace-nowrap">Add Child Application</p>
      <ChevronDown />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame6 />
      <Frame7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Frame2 />
      <Frame5 />
    </div>
  );
}

function MinusSquare() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="minus-square">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="minus-square">
          <path d={svgPaths.p31a74780} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Folder() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="folder">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="folder">
          <path d={svgPaths.pf1fc000} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#ffd100] content-stretch flex items-center justify-center relative rounded-[10px] shrink-0 size-[20px]" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[10px] text-black whitespace-nowrap">8</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0 w-full" data-name="Frame">
      <MinusSquare />
      <Folder />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Bold',sans-serif] leading-[normal] min-w-px not-italic relative text-[14px] text-black">ABC Holdings</p>
      <Frame11 />
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="star">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_389)" id="star">
          <path d={svgPaths.p2145d0f0} id="Vector" stroke="var(--stroke-0, #F6AD55)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_389">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:Bold',sans-serif] relative shrink-0 text-[13px]">APP-2026-00123 (Parent)</p>
      <p className="font-['Figtree:Regular',sans-serif] relative shrink-0 text-[12px]">Working Capital Facility</p>
    </div>
  );
}

function MinusSquare1() {
  return (
    <div className="absolute left-[-21.5px] size-[14px] top-[16px]" data-name="minus-square">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="minus-square">
          <path d={svgPaths.p34782800} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#fff9e5] relative rounded-[6px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#ffd100] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
          <Star />
          <Frame15 />
          <MinusSquare1 />
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-[218px]" data-name="Frame">
      <Frame14 />
    </div>
  );
}

function FileText() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-text">
          <path d={svgPaths.p1b3c2900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] relative shrink-0 text-[13px]">APP-2026-00124</p>
      <p className="font-['Figtree:Regular',sans-serif] relative shrink-0 text-[12px]">Term Loan Facility</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative shrink-0" data-name="Frame">
      <FileText />
      <Frame17 />
    </div>
  );
}

function FileText1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-text">
          <path d={svgPaths.p1b3c2900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame19() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] relative shrink-0 text-[13px]">APP-2026-00125</p>
      <p className="font-['Figtree:Regular',sans-serif] relative shrink-0 text-[12px]">Trade Finance Facility</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative shrink-0" data-name="Frame">
      <FileText1 />
      <Frame19 />
    </div>
  );
}

function FileText2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-text">
          <path d={svgPaths.p1b3c2900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame21() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] relative shrink-0 text-[13px]">APP-2026-00126</p>
      <p className="font-['Figtree:Regular',sans-serif] relative shrink-0 text-[12px]">Guarantee Facility</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative shrink-0" data-name="Frame">
      <FileText2 />
      <Frame21 />
    </div>
  );
}

function FileText3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="file-text">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="file-text">
          <path d={svgPaths.p1b3c2900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic relative shrink-0 text-black whitespace-nowrap" data-name="Frame">
      <p className="font-['Figtree:SemiBold',sans-serif] relative shrink-0 text-[13px]">APP-2026-00127</p>
      <p className="font-['Figtree:Regular',sans-serif] relative shrink-0 text-[12px]">Cash Management Facility</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center pl-[24px] relative shrink-0" data-name="Frame">
      <FileText3 />
      <Frame23 />
    </div>
  );
}

function ChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-right">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-right">
          <path d="M4.5 9L7.5 6L4.5 3" id="Vector" stroke="var(--stroke-0, #3182CE)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#3182ce] text-[12px] whitespace-nowrap">View all 8 applications</p>
      <ChevronRight />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[52px] relative size-full">
        <Frame13 />
        <Frame16 />
        <Frame18 />
        <Frame20 />
        <Frame22 />
        <div className="absolute flex h-[215px] items-center justify-center left-[37px] top-[-15px] w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[215px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 215 1">
                  <line id="Line 5" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="215" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-[37px] items-center justify-center left-[8px] top-[-14px] w-0">
          <div className="flex-none rotate-90">
            <div className="h-0 relative w-[37px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 1">
                  <line id="Line 6" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="37" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[8px] top-[22px] w-[24px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[24px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 1">
                  <line id="Line 7" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="24" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[37px] top-[73px] w-[41px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[41px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 1">
                  <line id="Line 8" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="41" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[37px] top-[116px] w-[41px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[41px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 1">
                  <line id="Line 8" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="41" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[37px] top-[157px] w-[41px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[41px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 1">
                  <line id="Line 8" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="41" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex h-0 items-center justify-center left-[37.5px] top-[199px] w-[41px]">
          <div className="flex-none rotate-180">
            <div className="h-0 relative w-[41px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 41 1">
                  <line id="Line 8" stroke="var(--stroke-0, #718096)" strokeDasharray="2 2" x2="41" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Frame24 />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-auto items-start pb-[10px] pl-[10px] pr-[25px] pt-[20px] relative shrink-0 w-[301px]" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-r border-solid border-t inset-0 pointer-events-none" />
      <Frame10 />
      <Frame12 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#e6fffa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00bfa5] text-[11px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#718096] text-[11px] uppercase whitespace-nowrap">Status</p>
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:SemiBold',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Application ID</p>
      <p className="relative shrink-0 text-[14px] text-black">APP-2026-00123</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:SemiBold',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Application Name</p>
      <p className="relative shrink-0 text-[14px] text-black">Working Capital Facility</p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:SemiBold',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Application Type</p>
      <p className="relative shrink-0 text-[14px] text-black">Parent Application</p>
    </div>
  );
}

function Frame33() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:SemiBold',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Owner</p>
      <p className="relative shrink-0 text-[14px] text-black">John Tan (RM)</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Figtree:SemiBold',sans-serif] gap-[4px] items-start leading-[normal] not-italic relative shrink-0 whitespace-nowrap" data-name="Frame">
      <p className="relative shrink-0 text-[#718096] text-[11px] uppercase">Created Date</p>
      <p className="relative shrink-0 text-[14px] text-black">12 Jan 2024</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-start flex flex-wrap gap-[19.5px_35px] items-start relative shrink-0 w-full" data-name="Frame">
      <Frame28 />
      <Frame30 />
      <Frame31 />
      <Frame32 />
      <Frame33 />
      <Frame34 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="h-[51px] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border-[#e2e8f0] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pl-[10px] relative size-full">
        <Frame27 />
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="bg-[#f7fafc] relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex font-['Figtree:SemiBold',sans-serif] items-start leading-[normal] not-italic px-[12px] py-[8px] relative size-full text-[11px] text-black uppercase">
        <p className="relative shrink-0 w-[130px]">Application ID</p>
        <p className="flex-[1_0_0] min-w-px relative">Application Name</p>
        <p className="relative shrink-0 w-[120px]">Status</p>
        <p className="relative shrink-0 w-[100px]">Owner</p>
        <p className="relative shrink-0 w-[80px]">Actions</p>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="bg-[#e6fffa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00bfa5] text-[11px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame40 />
    </div>
  );
}

function Edit() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="edit-3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_340)" id="edit-3">
          <path d={svgPaths.p1920900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_340">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Trash() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_337)" id="trash-2">
          <path d={svgPaths.p234d2680} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_337">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[80px]" data-name="Frame">
      <Edit />
      <Trash />
    </div>
  );
}

function Frame38() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[130px]">APP-2026-00124</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[13px] text-black">Term Loan Facility</p>
          <Frame39 />
          <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[100px]">John Tan</p>
          <Frame41 />
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#e6fffa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00bfa5] text-[11px] whitespace-nowrap">Submitted</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame44 />
    </div>
  );
}

function Edit1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="edit-3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_340)" id="edit-3">
          <path d={svgPaths.p1920900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_340">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Trash1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_337)" id="trash-2">
          <path d={svgPaths.p234d2680} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_337">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[80px]" data-name="Frame">
      <Edit1 />
      <Trash1 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[130px]">APP-2026-00125</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[13px] text-black">Trade Finance Facility</p>
          <Frame43 />
          <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[100px]">John Tan</p>
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#e6fffa] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#00bfa5] text-[11px] whitespace-nowrap">In Progress</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame48 />
    </div>
  );
}

function Edit2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="edit-3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_340)" id="edit-3">
          <path d={svgPaths.p1920900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_340">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Trash2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_337)" id="trash-2">
          <path d={svgPaths.p234d2680} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_337">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[80px]" data-name="Frame">
      <Edit2 />
      <Trash2 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[130px]">APP-2026-00126</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[13px] text-black">Guarantee Facility</p>
          <Frame47 />
          <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[100px]">John Tan</p>
          <Frame49 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex items-start px-[8px] py-[2px] relative rounded-[100px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a5568] text-[11px] whitespace-nowrap">Draft</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[120px]" data-name="Frame">
      <Frame52 />
    </div>
  );
}

function Edit3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="edit-3">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_340)" id="edit-3">
          <path d={svgPaths.p1920900} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_340">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Trash3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="trash-2">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_337)" id="trash-2">
          <path d={svgPaths.p234d2680} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_337">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[80px]" data-name="Frame">
      <Edit3 />
      <Trash3 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-[10px] relative size-full">
          <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[130px]">APP-2026-00127</p>
          <p className="[word-break:break-word] flex-[1_0_0] font-['Figtree:Regular',sans-serif] leading-[normal] min-w-px not-italic relative text-[13px] text-black">Cash Management Facility</p>
          <Frame51 />
          <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] text-black w-[100px]">John Tan</p>
          <Frame53 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none" />
      <Frame37 />
      <Frame38 />
      <Frame42 />
      <Frame46 />
      <Frame50 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="content-stretch flex flex-col gap-[12px] items-start pl-[10px] relative size-full">
        <p className="[word-break:break-word] capitalize font-['Figtree:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[11px] text-black whitespace-nowrap">Child Applications (4)</p>
        <Frame36 />
        <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#718096] text-[12px] whitespace-nowrap">Showing 1 to 4 of 4 applications</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[13px] items-start min-w-px py-[20px] relative" data-name="Frame">
      <Frame26 />
      <Frame35 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex h-auto items-start relative rounded-[4px] shrink-0 w-full" data-name="Frame">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame9 />
      <Frame25 />
    </div>
  );
}

export default function StructureManagerCard() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[20px] items-start px-[24px] py-[12px] relative rounded-[4px] size-full" data-name="structure-manager-card">
      <div aria-hidden className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame />
      <Frame8 />
    </div>
  );
}