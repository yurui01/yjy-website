import { Card, CardBody, CardHeader } from "@nextui-org/react";

export const Features = () => {
  return (
    <section className="flex min-h-screen flex-nowrap items-center justify-start flex-col mt-10">
      <h1 className="tracking-tight inline font-semibold dark:from-[#FFFFFF] dark:to-[#DCDCDC] text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-b">
        我们的优势
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <img src="/images/undraw_experience_design_re_dmqq.svg" width={"80%"} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card
            isBlurred
            className="bg-white/5 dark:bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex justify-center items-center"
          >
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-3">
              <div className="flex justify-center p-2 rounded-full items-center bg-default-100 dark:bg-transparent text-default-500/50">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35ZM10.09 9C10.65 9 11.1 9.45 11.1 10C11.1 10.55 10.65 11 10.1 11C9.55 11 9.1 10.55 9.1 10C9.1 9.45 9.54 9 10.09 9ZM7.09 9C7.66 9 8.1 9.45 8.1 10C8.1 10.55 7.65 11 7.1 11C6.55 11 6.1 10.55 6.1 10C6.1 9.45 6.54 9 7.09 9ZM17 16.25H7.02C6.61 16.25 6.26 15.91 6.26 15.5C6.26 15.09 6.59 14.75 7 14.75H17C17.41 14.75 17.75 15.09 17.75 15.5C17.75 15.91 17.41 16.25 17 16.25ZM17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">精准需求分析</p>
            </div>
          </Card>

          <Card
            isBlurred
            className="bg-white/5 dark:bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex justify-center items-center"
          >
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-3">
              <div className="flex justify-center p-2 rounded-full items-center bg-default-100 dark:bg-transparent text-default-500/50">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M20.9597 17.8385L19.3297 18.3885C18.8797 18.5385 18.5197 18.8885 18.3697 19.3485L17.8197 20.9785C17.3497 22.3885 15.3697 22.3585 14.9297 20.9485L13.0797 14.9985C12.7197 13.8185 13.8097 12.7185 14.9797 13.0885L20.9397 14.9385C22.3397 15.3785 22.3597 17.3685 20.9597 17.8385Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M20.9994 11.4994C20.9994 11.9294 20.9694 12.3594 20.9194 12.7794C20.8794 13.0794 20.5694 13.2594 20.2794 13.1694L15.4294 11.6594C14.3494 11.3294 13.1994 11.6094 12.3994 12.3994C11.5994 13.1994 11.3094 14.3694 11.6494 15.4494L13.1494 20.2794C13.2394 20.5694 13.0494 20.8794 12.7494 20.9194C12.3294 20.9694 11.9194 20.9994 11.4994 20.9994C6.15942 20.9994 1.85942 16.6094 1.99942 11.2294C2.13942 6.26942 6.26942 2.13942 11.2294 1.99942C16.6094 1.85942 20.9994 6.15942 20.9994 11.4994Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">紧密代码逻辑</p>
            </div>
          </Card>

          <Card
            isBlurred
            className="bg-white/5 dark:bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex justify-center items-center"
          >
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-3">
              <div className="flex justify-center p-2 rounded-full items-center bg-default-100 dark:bg-transparent text-default-500/50">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M17 13.5V14.37C17 15.82 15.82 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7H10.5V10.5C10.5 12.16 11.84 13.5 13.5 13.5H17Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">专业项目测试</p>
            </div>
          </Card>

          <Card
            isBlurred
            className="bg-white/5 dark:bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex justify-center items-center"
          >
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-3">
              <div className="flex justify-center p-2 rounded-full items-center bg-default-100 dark:bg-transparent text-default-500/50">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">终身售后保障</p>
            </div>
          </Card>

          <Card
            isBlurred
            className="bg-white/5 dark:bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex justify-center items-center"
          >
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-3">
              <div className="flex justify-center p-2 rounded-full items-center bg-default-100 dark:bg-transparent text-default-500/50">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">稳定系统保障</p>
            </div>
          </Card>

          <Card
            isBlurred
            className="bg-white/5 dark:bg-white/5 backdrop-blur-lg backdrop-saturate-[1.8] flex justify-center items-center"
          >
            <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 pb-3">
              <div className="flex justify-center p-2 rounded-full items-center bg-default-100 dark:bg-transparent text-default-500/50">
                <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height="24"
                  role="presentation"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M18 2H6C3.79 2 2 3.79 2 6V15C2 17.21 3.79 19 6 19H18C20.21 19 22 17.21 22 15V6C22 3.79 20.21 2 18 2ZM9.99 7.32C10.55 7.32 11 7.77 11 8.32C11 8.87 10.55 9.32 10 9.32C9.45 9.32 9 8.87 9 8.32C9 7.77 9.44 7.32 9.99 7.32ZM6.84 7.32C7.4 7.32 7.85 7.77 7.85 8.32C7.85 8.87 7.4 9.32 6.85 9.32C6.3 9.32 5.85 8.87 5.85 8.32C5.85 7.77 6.28 7.32 6.84 7.32ZM17.26 14.86H6.76C6.34 14.86 6 14.52 6 14.11C6 13.7 6.33 13.36 6.74 13.36H17.27C17.68 13.36 18.02 13.7 18.02 14.11C18.02 14.52 17.68 14.86 17.26 14.86ZM17.26 9.07H13.58C13.17 9.07 12.83 8.73 12.83 8.32C12.83 7.91 13.17 7.57 13.58 7.57H17.26C17.67 7.57 18.01 7.91 18.01 8.32C18.01 8.73 17.68 9.07 17.26 9.07Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <p className="text-base font-semibold">多种开发语言支持</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
