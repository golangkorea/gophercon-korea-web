import Layout from "@/components/layout";
import { SESSIONS } from "@/constants/sessions";
import { getI18nProps } from "@/i18n/utils/getI18nProps";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

const ProgramTable = styled.table({});

export default function Program() {
  const router = useRouter();
  const [tab, setTab] = React.useState<"DAY1" | "DAY2">("DAY1");
  const onChangeTab = (tab: "DAY1" | "DAY2") => {
    return () => setTab(tab);
  };

  const routeToDetail = (id: number) => {
    return () => {
      router.push(`/program/${id}`);
    };
  };
  return (
    <Layout>
      <section className='p-20 max-lg:p-4'>
        <div className='flex w-full gap-4'>
          <button
            onClick={onChangeTab("DAY1")}
            className={`pb-1.5 text-xl tracking-widest ${
              tab === "DAY1" ? "border-b-2 border-mint font-bold" : "font-medium text-gray-500"
            }`}
          >
            DAY1
          </button>
          <button
            onClick={onChangeTab("DAY2")}
            className={`pb-1.5 text-xl tracking-widest ${
              tab === "DAY2" ? "border-b-2 border-mint font-bold" : "font-medium text-gray-500"
            }`}
          >
            DAY2
          </button>
        </div>
        <div className='mt-8 flow-root max-lg:hidden'>
          <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
            <div className='flex min-w-full justify-center py-2 align-middle'>
              <ProgramTable>
                <tbody className='divide-y divide-gray-200'>
                  {SESSIONS.map((session) => {
                    if (tab === "DAY1" && session.date === "08-06") return;
                    if (tab === "DAY2" && session.date === "08-05") return;
                    return (
                      <tr key={session.id}>
                        <td className='w-3/6 whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900'>
                          {session.title}
                        </td>
                        <td className='w-1/6 whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{session.category}</td>
                        <td className='w-1/6 whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{`${session.startTime} ~ ${session.endTime}`}</td>
                        {session.category === "Main Talk" && (
                          <div>
                            <td className='w-1/6 whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{`${session.speaker.name} | ${session.speaker.company}`}</td>
                            <td
                              onClick={routeToDetail(session.id)}
                              className='cursor-pointer whitespace-nowrap px-3 py-4 text-sm font-bold text-blue-400'
                            >
                              Learn More
                            </td>
                          </div>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </ProgramTable>
            </div>
          </div>
        </div>
        <div className='mt-8 lg:hidden'>
          <div className=''>
            <div className='flex w-full flex-col justify-center gap-4 py-2 align-middle'>
              {SESSIONS.map((session) => {
                if (tab === "DAY1" && session.date === "08-06") return;
                if (tab === "DAY2" && session.date === "08-05") return;
                return (
                  <div key={session.id} className='flex flex-col gap-2 rounded-md border border-mint p-3'>
                    <p className='whitespace-pre-line font-semibold text-gray-500'>{session.category}</p>
                    <p className='whitespace-pre-line font-bold text-gray-900'>{session.title}</p>
                    <p className='whitespace-pre-line text-sm text-gray-500'>{`${session.startTime} ~ ${session.endTime}`}</p>
                    {session.category === "Main Talk" && (
                      <div>
                        <p className='whitespace-pre-line text-sm text-gray-500'>{`${session.speaker.name} | ${session.speaker.company}`}</p>
                        <p
                          onClick={routeToDetail(session.id)}
                          className='whitespace-pre-line text-sm font-bold text-blue-400'
                        >
                          Learn More
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = getI18nProps;
