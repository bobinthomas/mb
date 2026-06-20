import svgPaths from "./svg-0az1rbloz0";

function ChartNetwork() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="chart-network">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="chart-network">
          <path d={svgPaths.p2e3dcf80} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex items-center justify-center relative rounded-[12px] shrink-0 size-[60px]" data-name="Frame">
      <ChartNetwork />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="lock">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_7_454)" id="lock">
          <path d={svgPaths.p28fe0540} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_7_454">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#151a20] content-stretch flex items-center justify-center left-[calc(50%+20px)] rounded-[99px] size-[32px] top-[calc(50%+20px)]" data-name="Frame">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[99px]" />
      <Lock />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0" data-name="Frame">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex items-start px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#718096] text-[13px] whitespace-nowrap">Change Parent Application</p>
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="plus">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="plus">
          <path d={svgPaths.p133cc000} id="Vector" stroke="var(--stroke-0, #718096)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#edf2f7] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Frame">
      <Plus />
      <p className="[word-break:break-word] font-['Figtree:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#718096] text-[13px] whitespace-nowrap">Add Child Application</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-start right-0 top-[-50px]" data-name="Frame">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center py-[40px] relative size-full" data-name="Frame">
      <Frame1 />
      <p className="[word-break:break-word] font-['Figtree:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#718096] text-[14px] text-center w-[340px]">Please select a group from Section 2 to view and manage the group structure.</p>
      <Frame4 />
    </div>
  );
}