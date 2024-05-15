import { Card, CardBody, CardHeader } from "@nextui-org/react";

export const Services = () => {
  return (
    <section className="flex h-[500px] flex-nowrap items-center justify-start flex-col mt-40">
      <h1 className="tracking-tight inline font-semibold dark:from-[#FFFFFF] dark:to-[#DCDCDC] text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
        业务及服务
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16">
        <Card
          isBlurred
          className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
        >
          <CardHeader className="flex items-center space-x-3">
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="24"
              role="presentation"
              viewBox="0 0 24 24"
              width="24"
              className="text-pink-500"
            >
              <path
                d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.244 18.25h.01"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <p className="text-base font-semibold">大数据</p>
          </CardHeader>
          <CardBody className="font-normal text-base text-default-500">
            <span>慧聚数智,合创生态,人工智能时代的数据工程家</span>
          </CardBody>
        </Card>

        <Card
          isBlurred
          className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
        >
          <CardHeader className="flex items-center space-x-3">
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="24"
              role="presentation"
              viewBox="0 0 24 24"
              width="24"
              className="text-pink-500"
            >
              <path
                d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.244 18.25h.01"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <p className="text-base font-semibold">云解决方案</p>
          </CardHeader>
          <CardBody className="font-normal text-base text-default-500">
            <span>聚合云服务能力，全方位赋能企业,提高企业核心竞争力</span>
          </CardBody>
        </Card>

        <Card
          isBlurred
          className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
        >
          <CardHeader className="flex items-center space-x-3">
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="24"
              role="presentation"
              viewBox="0 0 24 24"
              width="24"
              className="text-pink-500"
            >
              <path
                d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.244 18.25h.01"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <p className="text-base font-semibold">软件平台</p>
          </CardHeader>
          <CardBody className="font-normal text-base text-default-500">
            <span>为客户行业解决方案提供定制开发基础平台</span>
          </CardBody>
        </Card>

        <Card
          isBlurred
          className="bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
        >
          <CardHeader className="flex items-center space-x-3">
            <svg
              aria-hidden="true"
              fill="none"
              focusable="false"
              height="24"
              role="presentation"
              viewBox="0 0 24 24"
              width="24"
              className="text-pink-500"
            >
              <path
                d="M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
              <path
                d="M17.244 18.25h.01"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              ></path>
            </svg>
            <p className="text-base font-semibold">管理服务</p>
          </CardHeader>
          <CardBody className="font-normal text-base text-default-500">
            <span>为客户提供可靠稳定的管理服务,包括系统运维/业务代运营/技术支持/业务咨询</span>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
