import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative'>
          <img
            className='absolute top-0 left-0'
            src='flaro-assets/images/headers/gradient4.svg'
            alt=''
          />
          <div className='container mx-auto overflow-hidden'>
            <div className='relative z-20 flex items-center justify-between px-4 py-5 bg-transparent'>
              <div className='w-auto'>
                <div className='flex flex-wrap items-center'>
                  <div className='w-auto mr-14'>
                    <a href='#'>
                      <img
                        src='flaro-assets/logos/flaro-logo-black.svg'
                        alt=''
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='w-auto'></div>
              <div className='w-auto hidden lg:block'>
                <ul className='flex items-center mr-16'>
                  <li className='mr-9 font-medium hover:text-gray-700'>
                    <a href='#'>Features</a>
                  </li>
                  <li className='mr-9 font-medium hover:text-gray-700'>
                    <a href='#'>Solutions</a>
                  </li>
                  <li className='mr-9 font-medium hover:text-gray-700'>
                    <a href='#'>Resources</a>
                  </li>
                  <li className='font-medium hover:text-gray-700'>
                    <a href='#'>Pricing</a>
                  </li>
                </ul>
              </div>
              <div className='flex flex-wrap items-center'>
                <div className='w-auto hidden mr-5 lg:block'>
                  <div className='inline-block'>
                    <button
                      className='py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200'
                      type='button'
                    >
                      Sign In
                    </button>
                  </div>
                </div>
                <div className='w-auto hidden lg:block'>
                  <div className='inline-block'>
                    <button
                      className='py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                      type='button'
                    >
                      Try 14 Days Free Trial
                    </button>
                  </div>
                </div>
                <div className='w-auto lg:hidden'>
                  <a href='#'>
                    <svg
                      className='navbar-burger text-indigo-600'
                      width={51}
                      height={51}
                      viewBox='0 0 56 56'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        width={56}
                        height={56}
                        rx={28}
                        fill='currentColor'
                      />
                      <path
                        d='M37 32H19M37 24H19'
                        stroke='white'
                        strokeWidth='1.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50'>
              <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-80' />
              <nav className='relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto'>
                <div className='flex flex-wrap justify-between h-full'>
                  <div className='w-full'>
                    <div className='flex items-center justify-between -m-2'>
                      <div className='w-auto p-2'>
                        <a className='inline-block' href='#'>
                          <img
                            src='flaro-assets/logos/flaro-logo-black.svg'
                            alt=''
                          />
                        </a>
                      </div>
                      <div className='w-auto p-2'>
                        <a className='navbar-burger' href='#'>
                          <svg
                            width={24}
                            height={24}
                            viewBox='0 0 24 24'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M6 18L18 6M6 6L18 18'
                              stroke='#111827'
                              strokeWidth={2}
                              strokeLinecap='round'
                              strokeLinejoin='round'
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col justify-center py-16 w-full'>
                    <ul>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Features
                        </a>
                      </li>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Solutions
                        </a>
                      </li>
                      <li className='mb-12'>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Resources
                        </a>
                      </li>
                      <li>
                        <a className='font-medium hover:text-gray-700' href='#'>
                          Pricing
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex flex-col justify-end w-full pb-8'>
                    <div className='flex flex-wrap'>
                      <div className='w-full mb-3'>
                        <div className='block'>
                          <button
                            className='py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200'
                            type='button'
                          >
                            Sign In
                          </button>
                        </div>
                      </div>
                      <div className='w-full'>
                        <div className='block'>
                          <button
                            className='py-3 px-5 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                            type='button'
                          >
                            Try 14 Days Free Trial
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='overflow-hidden pt-16 pb-48'>
            <div className='relative container px-4 mx-auto'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full md:w-1/2 lg:w-4/12 xl:w-6/12 p-8'>
                  <h1 className='mb-9 text-6xl md:text-8xl lg:text-13xl font-bold font-heading md:max-w-2xl leading-none'>
                    Meet similar minded people
                  </h1>
                  <div>
                    <p className='mb-9 text-xl text-gray-900 font-medium md:max-w-sm'>
                      Get the best-in-class group mentoring plans and
                      professional benefits for your team
                    </p>
                    <div className='mb-12 md:inline-block'>
                      <button
                        className='py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                        type='button'
                      >
                        Try 14 Days Free Trial
                      </button>
                    </div>
                    <h3 className='mb-3 text-gray-900 font-semibold'>
                      Trusted by 1M+ customers
                    </h3>
                    <div className='flex flex-wrap items-center -m-1'>
                      <div className='w-auto p-1'>
                        <div className='flex flex-wrap -m-0.5'>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                          <div className='w-auto p-0.5'>
                            <svg
                              width={17}
                              height={16}
                              viewBox='0 0 17 16'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z'
                                fill='#6366F1'
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className='w-auto p-1'>
                        <div className='flex flex-wrap -m-0.5'>
                          <div className='w-auto p-0.5'>
                            <p className='text-gray-900 font-bold'>4.2/5</p>
                          </div>
                          <div className='w-auto p-0.5'>
                            <p className='text-gray-600 font-medium'>
                              (45k Reviews)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-full md:w-1/2 lg:w-8/12 xl:w-8/12 xl:absolute xl:right-0 xl:-bottom-20 p-8'>
                  <div className='flex flex-wrap justify-center items-center lg:justify-end -m-3'>
                    <div className='w-auto lg:w-1/3 xl:pt-28 p-3'>
                      <div className='flex flex-wrap justify-end'>
                        <div className='w-auto'>
                          <img
                            className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                            src='flaro-assets/images/headers/people.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-auto lg:w-1/3 p-3'>
                      <div className='flex flex-wrap justify-center -m-3'>
                        <div className='w-auto p-3'>
                          <a href='#'>
                            <img
                              className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                              src='flaro-assets/images/headers/video.png'
                              alt=''
                            />
                          </a>
                        </div>
                        <div className='w-auto p-3'>
                          <img
                            className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                            src='flaro-assets/images/headers/people2.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                    <div className='w-auto lg:w-1/3 p-3'>
                      <div className='flex flex-wrap'>
                        <div className='w-auto'>
                          <img
                            className='mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000'
                            src='flaro-assets/images/headers/people3.png'
                            alt=''
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap items-center -m-8'>
              <div className='w-full md:w-1/3 p-8'>
                <div className='md:max-w-sm'>
                  <div className='flex flex-wrap items-center -m-3'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full'>
                        <img
                          src='flaro-assets/images/features/chat.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h3 className='text-xl font-semibold'>
                        A complete UI kit for building your business
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-8'>
                <div className='md:max-w-sm'>
                  <div className='flex flex-wrap items-center -m-3'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full'>
                        <img
                          src='flaro-assets/images/features/layers.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h3 className='text-xl font-semibold'>
                        One-click copy &amp; paste system to make it useful
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/3 p-8'>
                <div className='md:max-w-sm'>
                  <div className='flex flex-wrap items-center -m-3'>
                    <div className='w-auto p-3'>
                      <div className='flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full'>
                        <img
                          src='flaro-assets/images/features/replace.svg'
                          alt=''
                        />
                      </div>
                    </div>
                    <div className='flex-1 p-3'>
                      <h3 className='text-xl font-semibold'>
                        Unlimited support from the expert members
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-24 pb-36 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-7 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none'>
              Let’s see how it works
            </h2>
            <p className='mb-20 font-sans text-lg text-gray-900 text-center md:max-w-lg mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elemen tum.
            </p>
            <div
              className='relative bg-no-repeat bg-center bg-cover bg-fixed overflow-hidden rounded-4xl'
              style={{
                height: 648,
                backgroundImage:
                  'url("flaro-assets/images/how-it-works/bg.png")',
              }}
            >
              <div className='absolute top-0 left-0 p-14 md:p-20 md:pb-0 overflow-y-auto h-full'>
                <div className='flex flex-wrap'>
                  <div className='w-full'>
                    <div className='flex flex-wrap -m-3'>
                      <div className='w-auto p-3'>
                        <svg
                          width={35}
                          height={35}
                          viewBox='0 0 35 35'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx='17.5' cy='17.5' r='17.5' fill='#4F46E5' />
                          <path
                            d='M11.667 18.3333L15.0003 21.6666L23.3337 13.3333'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <img
                          className='mx-auto'
                          src='flaro-assets/images/how-it-works/line3.svg'
                          alt=''
                        />
                      </div>
                      <div className='flex-1 p-3'>
                        <div className='md:max-w-xs pb-8'>
                          <p className='mb-5 text-sm text-gray-400 font-semibold uppercase tracking-px'>
                            Step 1
                          </p>
                          <h3 className='mb-2 text-xl text-white font-bold leading-normal'>
                            Choose A Package
                          </h3>
                          <p className='text-gray-300 font-medium leading-relaxed'>
                            Lorem ipsum dolor sit amet, to the consectetur
                            adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex flex-wrap -m-3'>
                      <div className='w-auto p-3'>
                        <svg
                          width={35}
                          height={35}
                          viewBox='0 0 35 35'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx='17.5' cy='17.5' r='17.5' fill='#4F46E5' />
                          <path
                            d='M11.667 18.3333L15.0003 21.6666L23.3337 13.3333'
                            stroke='white'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                        <img
                          className='mx-auto'
                          src='flaro-assets/images/how-it-works/line3.svg'
                          alt=''
                        />
                      </div>
                      <div className='flex-1 p-3'>
                        <div className='md:max-w-xs pb-8'>
                          <p className='mb-5 text-sm text-gray-400 font-semibold uppercase tracking-px'>
                            Step 2
                          </p>
                          <h3 className='mb-2 text-xl text-white font-bold leading-normal'>
                            Pay with One Click
                          </h3>
                          <p className='text-gray-300 font-medium leading-relaxed'>
                            Lorem ipsum dolor sit amet, to the consectetur
                            adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='w-full'>
                    <div className='flex flex-wrap -m-3'>
                      <div className='w-auto p-3'>
                        <svg
                          width={35}
                          height={35}
                          viewBox='0 0 35 35'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <circle cx='17.5' cy='17.5' r={17} stroke='#CBD5E1' />
                          <path
                            d='M11.667 18.3333L15.0003 21.6666L23.3337 13.3333'
                            stroke='#94A3B8'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                      <div className='flex-1 p-3'>
                        <div className='md:max-w-xs pb-8'>
                          <p className='mb-5 text-sm text-gray-400 font-semibold uppercase tracking-px'>
                            Step 3
                          </p>
                          <h3 className='mb-2 text-xl text-white font-bold leading-normal'>
                            Get Instant Access
                          </h3>
                          <p className='text-gray-300 font-medium leading-relaxed'>
                            Lorem ipsum dolor sit amet, to the consectetur
                            adipiscing elit.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative pt-24 pb-32 bg-white overflow-hidden'>
          <img
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            src='flaro-assets/images/testimonials/gradient3.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap justify-between items-end -m-2 mb-12'>
              <div className='w-auto p-2'>
                <h2 className='text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight'>
                  Customers love using Flaro.
                </h2>
              </div>
              <div className='w-auto p-2'>
                <a
                  className='font-sans font-medium text-indigo-600 hover:text-indigo-700 leading-10'
                  href='#'
                >
                  See all our reviews
                </a>
              </div>
            </div>
            <div className='flex flex-wrap -m-2'>
              <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div className='px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl'>
                  <div className='flex flex-col justify-between h-full'>
                    <div className='mb-7 block'>
                      <div className='flex flex-wrap -m-0.5 mb-6'>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className='mb-6 text-lg font-bold font-heading'>
                        “We love it.”
                      </h3>
                      <p className='text-lg font-medium'>
                        If you haven’t tried out Flaro App yet, I would
                        definitely recommend it for both designers and
                        developers!
                      </p>
                    </div>
                    <div className='block'>
                      <p className='font-bold'>
                        Jenny Wilson - Product Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div className='px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl'>
                  <div className='flex flex-col justify-between h-full'>
                    <div className='mb-7 block'>
                      <div className='flex flex-wrap -m-0.5 mb-6'>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className='mb-6 text-lg font-bold font-heading'>
                        “Beautiful layouts”
                      </h3>
                      <p className='text-lg font-medium'>
                        Very very easy for customer information to get secured
                        if all orders are on one device to keep it.
                      </p>
                    </div>
                    <div className='block'>
                      <p className='font-bold'>
                        Jenny Wilson - Product Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div className='px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl'>
                  <div className='flex flex-col justify-between h-full'>
                    <div className='mb-7 block'>
                      <div className='flex flex-wrap -m-0.5 mb-6'>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className='mb-6 text-lg font-bold font-heading'>
                        “Excellent Support”
                      </h3>
                      <p className='text-lg font-medium'>
                        Ease of use and efficiency of design tools. The ability
                        for the integrated marketing team to see all of a
                        project.
                      </p>
                    </div>
                    <div className='block'>
                      <p className='font-bold'>
                        Jenny Wilson - Product Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 lg:w-1/4 p-2'>
                <div className='px-8 py-6 h-full bg-white bg-opacity-80 rounded-3xl'>
                  <div className='flex flex-col justify-between h-full'>
                    <div className='mb-7 block'>
                      <div className='flex flex-wrap -m-0.5 mb-6'>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                        <div className='w-auto p-0.5'>
                          <svg
                            width={19}
                            height={18}
                            viewBox='0 0 19 18'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M9.30769 0L12.1838 5.82662L18.6154 6.76111L13.9615 11.2977L15.0598 17.7032L9.30769 14.6801L3.55554 17.7032L4.65385 11.2977L0 6.76111L6.43162 5.82662L9.30769 0Z'
                              fill='#F59E0B'
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className='mb-6 text-lg font-bold font-heading'>
                        “Easy to setup”
                      </h3>
                      <p className='text-lg font-medium'>
                        Very very easy for customer information to get secured
                        if all orders are on one device to keep it.
                      </p>
                    </div>
                    <div className='block'>
                      <p className='font-bold'>
                        Jenny Wilson - Product Manager
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-36 pb-28 bg-blueGray-100 overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap justify-center'>
              <div className='w-auto'>
                <img
                  src='flaro-assets/logos/brands/logo-square-white.png'
                  alt=''
                />
              </div>
              <div className='w-auto'>
                <img
                  src='flaro-assets/logos/brands/logo-square-white2.png'
                  alt=''
                />
              </div>
              <div className='w-auto'>
                <img
                  src='flaro-assets/logos/brands/logo-square-white3.png'
                  alt=''
                />
              </div>
              <div className='w-auto'>
                <img
                  src='flaro-assets/logos/brands/logo-square-white4.png'
                  alt=''
                />
              </div>
              <div className='w-auto'>
                <img
                  src='flaro-assets/logos/brands/logo-square-white5.png'
                  alt=''
                />
              </div>
              <div className='w-auto'>
                <img
                  src='flaro-assets/logos/brands/logo-square-white6.png'
                  alt=''
                />
              </div>
            </div>
            <h2 className='mb-6 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none md:max-w-2xl mx-auto'>
              Loved by the incredible community
            </h2>
            <p className='text-lg text-gray-600 text-center font-medium leading-normal md:max-w-lg mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum.
            </p>
          </div>
        </section>
        <section className='relative pb-24 md:pt-24 xl:py-0 bg-blueGray-100 overflow-hidden'>
          <img
            className='absolute left-0 bottom-0'
            src='flaro-assets/images/applications/gradient3.svg'
            alt=''
          />
          <div className='relative z-10 container px-4 mx-auto'>
            <div className='flex flex-wrap lg:items-center -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <img
                  className='relative transform hover:scale-105 transition ease-in-out duration-1000'
                  src='flaro-assets/images/applications/manage.png'
                  alt=''
                />
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-2xl'>
                  <h2 className='mb-6 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none'>
                    Manage all from anywhere
                  </h2>
                  <p className='mb-11 text-lg text-gray-600 font-medium leading-normal md:max-w-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus sagittis nulla duis non at sed eget. Tincidunt eget
                    tempor nunc eget
                  </p>
                  <div className='flex flex-wrap -m-2.5 mb-9'>
                    <div className='w-auto p-2.5'>
                      <a href='#'>
                        <img
                          src='flaro-assets/images/applications/app-store.png'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='w-auto p-2.5'>
                      <a href='#'>
                        <img
                          src='flaro-assets/images/applications/play-store.png'
                          alt=''
                        />
                      </a>
                    </div>
                  </div>
                  <ul>
                    <li className='mb-3 inline-flex items-center w-full font-medium leading-relaxed'>
                      <svg
                        className='mr-3'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx={10} cy={10} r={10} fill='#4F46E5' />
                        <path
                          d='M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Beautiful and awesome interface</span>
                    </li>
                    <li className='mb-3 inline-flex items-center w-full font-medium leading-relaxed'>
                      <svg
                        className='mr-3'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx={10} cy={10} r={10} fill='#4F46E5' />
                        <path
                          d='M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Online collaborative anytime, anywhere.</span>
                    </li>
                    <li className='inline-flex items-center w-full font-medium leading-relaxed'>
                      <svg
                        className='mr-3'
                        width={20}
                        height={20}
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle cx={10} cy={10} r={10} fill='#4F46E5' />
                        <path
                          d='M5.91699 10.5834L8.25033 12.9167L14.0837 7.08337'
                          stroke='white'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>More Plugins</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-32 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='flex flex-wrap -m-8'>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-md'>
                  <h2 className='mb-7 text-6xl md:text-7xl font-bold font-heading tracking-px-n leading-tight'>
                    Frequently Asked Questions
                  </h2>
                  <p className='mb-11 text-gray-600 font-medium leading-relaxed'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    olutpat tempor.
                  </p>
                  <div className='md:inline-block'>
                    <button
                      className='py-4 px-6 w-full text-white font-semibold border border-indigo-700 rounded-xl shadow-4xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                      type='button'
                    >
                      Read Our Full FAQs
                    </button>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/2 p-8'>
                <div className='md:max-w-2xl ml-auto'>
                  <div className='flex flex-wrap'>
                    <div className='w-full'>
                      <div className='pb-5 border-b border-gray-300'>
                        <div className='flex flex-wrap -m-1.5'>
                          <div className='w-auto p-1.5'>
                            <svg
                              className='relative top-1'
                              width={15}
                              height={15}
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z'
                                stroke='#4F46E5'
                                strokeWidth='1.5'
                                strokeLinecap='round'
                                strokeLinejoin='round'
                              />
                            </svg>
                          </div>
                          <div className='flex-1 p-1.5'>
                            <h3 className='mb-4 font-semibold leading-normal'>
                              How does App help people in problems?
                            </h3>
                            <p className='mb-5 text-gray-600 font-medium leading-relaxed'>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Volutpat, tempor condimentum commodo
                              tincidunt sit dictumst. Eu placerat to a arcu at
                              sem vitae eros, purus nonprofit organizations for
                              all,
                            </p>
                            <p className='text-gray-600 font-medium leading-relaxed'>
                              Lorem ipsum dolor sit amet, to the consectr
                              adipiscing elit. Volutpat to the full tempor to
                              the condimentum vitae vel purus.
                            </p>
                          </div>
                          <div className='w-auto p-1.5'>
                            <a href='#'>
                              <svg
                                className='relative top-1'
                                width={15}
                                height={15}
                                viewBox='0 0 15 15'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  fillRule='evenodd'
                                  clipRule='evenodd'
                                  d='M3.21967 3.21967C3.51256 2.92678 3.98744 2.92678 4.28033 3.21967L7.5 6.43934L10.7197 3.21967C11.0126 2.92678 11.4874 2.92678 11.7803 3.21967C12.0732 3.51256 12.0732 3.98744 11.7803 4.28033L8.56066 7.5L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L7.5 8.56066L4.28033 11.7803C3.98744 12.0732 3.51256 12.0732 3.21967 11.7803C2.92678 11.4874 2.92678 11.0126 3.21967 10.7197L6.43934 7.5L3.21967 4.28033C2.92678 3.98744 2.92678 3.51256 3.21967 3.21967Z'
                                  fill='black'
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='w-full'>
                      <a className='block border-b border-gray-300' href='#'>
                        <div className='flex flex-wrap justify-between py-7 -m-1.5'>
                          <div className='flex-1 p-1.5'>
                            <div className='flex flex-wrap -m-1.5'>
                              <div className='w-auto p-1.5'>
                                <svg
                                  className='relative top-1'
                                  width={15}
                                  height={15}
                                  viewBox='0 0 15 15'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z'
                                    stroke='#4F46E5'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='flex-1 p-1.5'>
                                <h3 className='font-semibold leading-normal'>
                                  What happens if i go over my subscription
                                  limits?
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className='w-auto p-1.5'>
                            <svg
                              className='relative top-1'
                              width={15}
                              height={15}
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z'
                                fill='black'
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='w-full'>
                      <a className='block border-b border-gray-300' href='#'>
                        <div className='flex flex-wrap justify-between py-7 -m-1.5'>
                          <div className='flex-1 p-1.5'>
                            <div className='flex flex-wrap -m-1.5'>
                              <div className='w-auto p-1.5'>
                                <svg
                                  className='relative top-1'
                                  width={15}
                                  height={15}
                                  viewBox='0 0 15 15'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z'
                                    stroke='#4F46E5'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='flex-1 p-1.5'>
                                <h3 className='font-semibold leading-normal'>
                                  Why we are so confident about the future?
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className='w-auto p-1.5'>
                            <svg
                              className='relative top-1'
                              width={15}
                              height={15}
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z'
                                fill='black'
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className='w-full'>
                      <a className='block border-b border-gray-300' href='#'>
                        <div className='flex flex-wrap justify-between py-7 -m-1.5'>
                          <div className='flex-1 p-1.5'>
                            <div className='flex flex-wrap -m-1.5'>
                              <div className='w-auto p-1.5'>
                                <svg
                                  className='relative top-1'
                                  width={15}
                                  height={15}
                                  viewBox='0 0 15 15'
                                  fill='none'
                                  xmlns='http://www.w3.org/2000/svg'
                                >
                                  <path
                                    d='M5.14229 5.625C5.48549 4.89675 6.41152 4.375 7.50003 4.375C8.88075 4.375 10 5.21447 10 6.25C10 7.12465 9.20152 7.85942 8.12142 8.06662C7.78242 8.13166 7.50003 8.40482 7.50003 8.75M7.5 10.625H7.50625M13.125 7.5C13.125 10.6066 10.6066 13.125 7.5 13.125C4.3934 13.125 1.875 10.6066 1.875 7.5C1.875 4.3934 4.3934 1.875 7.5 1.875C10.6066 1.875 13.125 4.3934 13.125 7.5Z'
                                    stroke='#4F46E5'
                                    strokeWidth='1.5'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                  />
                                </svg>
                              </div>
                              <div className='flex-1 p-1.5'>
                                <h3 className='font-semibold leading-normal'>
                                  Where’s the funding goes?
                                </h3>
                              </div>
                            </div>
                          </div>
                          <div className='w-auto p-1.5'>
                            <svg
                              className='relative top-1'
                              width={15}
                              height={15}
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M7.5 2.25C7.91421 2.25 8.25 2.58579 8.25 3V6.75H12C12.4142 6.75 12.75 7.08579 12.75 7.5C12.75 7.91421 12.4142 8.25 12 8.25H8.25V12C8.25 12.4142 7.91421 12.75 7.5 12.75C7.08579 12.75 6.75 12.4142 6.75 12V8.25H3C2.58579 8.25 2.25 7.91421 2.25 7.5C2.25 7.08579 2.58579 6.75 3 6.75L6.75 6.75V3C6.75 2.58579 7.08579 2.25 7.5 2.25Z'
                                fill='black'
                              />
                            </svg>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='relative pt-28 pb-36 bg-blueGray-50 overflow-hidden'>
          <img
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            src='flaro-assets/images/team/gradient.svg'
            alt=''
          />
          <div className='container px-4 mx-auto'>
            <h2 className='mb-5 text-6xl md:text-7xl font-bold font-heading text-center tracking-px-n leading-tight'>
              Unlock startup’s true potential
            </h2>
            <p className='mb-16 text-lg text-gray-600 text-center font-medium leading-normal md:max-w-2xl mx-auto'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra.
            </p>
            <div className='md:max-w-2xl mx-auto bg-white rounded-4xl shadow-8xl'>
              <div className='flex flex-wrap justify-center items-center'>
                <div className='w-full md:flex-1'>
                  <div className='text-center p-8 md:px-16 md:pt-9 md:pb-11'>
                    <p className='mb-4 text-indigo-600 font-semibold leading-normal'>
                      Monthly Users
                    </p>
                    <h2 className='mb-4 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none'>
                      49,020
                    </h2>
                    <p className='text-gray-900 font-medium leading-snug'>
                      19% better than last month
                    </p>
                  </div>
                </div>
                <div className='w-auto'>
                  <div className='h-px w-14 md:w-px md:h-14 bg-gray-200' />
                </div>
                <div className='w-full md:flex-1'>
                  <div className='text-center p-8 md:px-16 md:pt-9 md:pb-11'>
                    <p className='mb-4 text-indigo-600 font-semibold leading-normal'>
                      Active Users
                    </p>
                    <h2 className='mb-4 text-6xl md:text-8xl xl:text-10xl font-bold font-heading tracking-px-n leading-none'>
                      2,530
                    </h2>
                    <p className='text-gray-900 font-medium leading-snug'>
                      33% better than last month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-24 pb-40 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <h2 className='mb-20 text-6xl md:text-8xl xl:text-10xl font-bold font-heading text-center tracking-px-n leading-none'>
              Showcase your software
            </h2>
            <div className='flex flex-wrap -m-16 md:-m-3'>
              <div className='w-full md:w-1/3 p-16 md:p-3'>
                <div className='px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl'>
                  <h3 className='mb-3 text-xl font-bold font-heading leading-normal'>
                    Unlimited Team Members
                  </h3>
                  <p className='mb-10 text-gray-600 font-medium leading-relaxed'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                  <img
                    className='mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000'
                    src='flaro-assets/images/features/peoples.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/3 p-16 md:p-3'>
                <div className='px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl'>
                  <h3 className='mb-3 text-xl font-bold font-heading leading-normal'>
                    Get Exact Reports
                  </h3>
                  <p className='mb-10 text-gray-600 font-medium leading-relaxed'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                  <img
                    className='mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000'
                    src='flaro-assets/images/features/reports.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='w-full md:w-1/3 p-16 md:p-3'>
                <div className='px-10 pt-11 text-center bg-gray-100 h-96 rounded-4xl'>
                  <h3 className='mb-3 text-xl font-bold font-heading leading-normal'>
                    Unlimited Team Members
                  </h3>
                  <p className='mb-10 text-gray-600 font-medium leading-relaxed'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                  <img
                    className='mx-auto h-72 object-cover rounded-3xl shadow-3xl transform hover:translate-y-3 transition ease-in-out duration-1000'
                    src='flaro-assets/images/features/users.png'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='pt-24 bg-white overflow-hidden'>
          <div className='container px-4 mx-auto'>
            <div className='pb-20 border-b'>
              <div className='flex flex-wrap -m-8'>
                <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                  <h3 className='mb-6 font-semibold leading-normal'>Company</h3>
                  <ul>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        About Us
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Careers
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Press
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                  <h3 className='mb-6 font-semibold leading-normal'>Pages</h3>
                  <ul>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Login
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Register
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Add list
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                  <h3 className='mb-6 font-semibold leading-normal'>Legal</h3>
                  <ul>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Terms
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        About Us
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/2 lg:w-2/12 p-8'>
                  <h3 className='mb-6 font-semibold leading-normal'>
                    Resources
                  </h3>
                  <ul>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Blog
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Service
                      </a>
                    </li>
                    <li className='mb-3.5'>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Product
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-gray-600 hover:text-gray-700 font-medium leading-relaxed'
                        href='#'
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full sm:w-1/2 lg:w-4/12 p-8'>
                  <div className='lg:max-w-sm'>
                    <h3 className='mb-6 font-semibold leading-normal'>
                      Subscribe
                    </h3>
                    <p className='mb-5 font-sans text-gray-600 leading-relaxed'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <div className='mb-3 xl:pl-6 inline-block md:max-w-xl w-full overflow-hidden border border-gray-300 rounded-xl focus-within:ring focus-within:ring-indigo-300'>
                      <div className='flex flex-wrap items-center'>
                        <div className='w-full xl:flex-1'>
                          <input
                            className='p-3 xl:p-0 xl:pr-6 w-full font-medium text-gray-500 placeholder-gray-500 outline-none'
                            id='footerInput1-1'
                            type='text'
                            placeholder='Type your e-mail'
                          />
                        </div>
                        <div className='w-full xl:w-auto'>
                          <div className='block'>
                            <button
                              className='py-4 px-8 w-full text-white font-semibold border border-indigo-700 focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-200'
                              type='button'
                            >
                              Subscribe
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-wrap justify-between items-center py-6 -m-4'>
              <div className='w-auto p-4'>
                <a href='#'>
                  <img src='flaro-assets/logos/flaro-logo-black.svg' alt='' />
                </a>
              </div>
              <div className='w-auto p-4'>
                <p className='text-sm text-gray-600 font-medium'>
                  Copyright © 2022 Flaro. All Rights Reserved
                </p>
              </div>
              <div className='w-auto p-4'>
                <div className='flex flex-wrap -m-4'>
                  <div className='w-auto p-4'>
                    <a
                      className='text-blueGray-400 hover:text-blueGray-500'
                      href='#'
                    >
                      <svg
                        width={9}
                        height={16}
                        viewBox='0 0 9 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M5.68503 5.32446L5.68503 3.82446C5.68503 3.17446 5.84293 2.82446 6.94819 2.82446H8.31661V0.324463L6.21135 0.324463C3.57977 0.324463 2.52714 1.97446 2.52714 3.82446V5.32446H0.421875L0.421875 7.82446H2.52714L2.52714 15.3245H5.68503L5.68503 7.82446H8.00082L8.31661 5.32446H5.68503Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                  <div className='w-auto p-4'>
                    <a
                      className='text-indigo-600 hover:text-indigo-700'
                      href='#'
                    >
                      <svg
                        width={16}
                        height={16}
                        viewBox='0 0 16 16'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.81641 0.324463C5.78109 0.324463 5.52516 0.333838 4.72547 0.369463C3.92578 0.406963 3.38109 0.532588 2.90391 0.718213C2.40337 0.906481 1.94999 1.2018 1.57547 1.58353C1.19398 1.95824 0.898694 2.41156 0.710156 2.91196C0.524531 3.38821 0.397969 3.93384 0.361406 4.73071C0.325781 5.53228 0.316406 5.78728 0.316406 7.8254C0.316406 9.86165 0.325781 10.1167 0.361406 10.9163C0.398906 11.7151 0.524531 12.2598 0.710156 12.737C0.902344 13.2301 1.15828 13.6482 1.57547 14.0654C1.99172 14.4826 2.40984 14.7395 2.90297 14.9307C3.38109 15.1163 3.92484 15.2429 4.72359 15.2795C5.52422 15.3151 5.77922 15.3245 7.81641 15.3245C9.85359 15.3245 10.1077 15.3151 10.9083 15.2795C11.7061 15.242 12.2527 15.1163 12.7298 14.9307C13.2301 14.7424 13.6831 14.447 14.0573 14.0654C14.4745 13.6482 14.7305 13.2301 14.9227 12.737C15.1073 12.2598 15.2339 11.7151 15.2714 10.9163C15.307 10.1167 15.3164 9.86165 15.3164 7.82446C15.3164 5.78728 15.307 5.53228 15.2714 4.73165C15.2339 3.93384 15.1073 3.38821 14.9227 2.91196C14.7341 2.41155 14.4389 1.95822 14.0573 1.58353C13.6829 1.20166 13.2295 0.906318 12.7289 0.718213C12.2508 0.532588 11.7052 0.406025 10.9073 0.369463C10.1067 0.333838 9.85266 0.324463 7.81453 0.324463H7.81734H7.81641ZM7.14422 1.67634H7.81734C9.81984 1.67634 10.057 1.6829 10.8473 1.71946C11.5786 1.75228 11.9761 1.87509 12.2405 1.97728C12.5902 2.11321 12.8405 2.27634 13.103 2.53884C13.3655 2.80134 13.5277 3.05071 13.6636 3.40134C13.7667 3.66478 13.8886 4.06228 13.9214 4.79353C13.958 5.58384 13.9655 5.82103 13.9655 7.82259C13.9655 9.82415 13.958 10.0623 13.9214 10.8526C13.8886 11.5838 13.7658 11.9804 13.6636 12.2448C13.5434 12.5704 13.3514 12.8649 13.102 13.1063C12.8395 13.3688 12.5902 13.531 12.2395 13.667C11.977 13.7701 11.5795 13.892 10.8473 13.9257C10.057 13.9613 9.81984 13.9698 7.81734 13.9698C5.81484 13.9698 5.57672 13.9613 4.78641 13.9257C4.05516 13.892 3.65859 13.7701 3.39422 13.667C3.06844 13.5469 2.77371 13.3553 2.53172 13.1063C2.28211 12.8645 2.0899 12.5698 1.96922 12.2438C1.86703 11.9804 1.74422 11.5829 1.71141 10.8517C1.67578 10.0613 1.66828 9.82415 1.66828 7.82071C1.66828 5.81821 1.67578 5.58196 1.71141 4.79165C1.74516 4.0604 1.86703 3.6629 1.97016 3.39853C2.10609 3.04884 2.26922 2.79853 2.53172 2.53603C2.79422 2.27353 3.04359 2.11134 3.39422 1.9754C3.65859 1.87228 4.05516 1.7504 4.78641 1.71665C5.47828 1.68478 5.74641 1.6754 7.14422 1.67446V1.67634ZM11.8205 2.92134C11.7023 2.92134 11.5852 2.94462 11.4761 2.98985C11.3669 3.03508 11.2676 3.10137 11.1841 3.18494C11.1005 3.26851 11.0342 3.36773 10.989 3.47692C10.9437 3.58612 10.9205 3.70315 10.9205 3.82134C10.9205 3.93953 10.9437 4.05656 10.989 4.16575C11.0342 4.27495 11.1005 4.37416 11.1841 4.45773C11.2676 4.54131 11.3669 4.6076 11.4761 4.65283C11.5852 4.69806 11.7023 4.72134 11.8205 4.72134C12.0592 4.72134 12.2881 4.62652 12.4569 4.45773C12.6256 4.28895 12.7205 4.06003 12.7205 3.82134C12.7205 3.58264 12.6256 3.35372 12.4569 3.18494C12.2881 3.01616 12.0592 2.92134 11.8205 2.92134ZM7.81734 3.97321C7.30647 3.96524 6.79912 4.05898 6.32482 4.24897C5.85053 4.43896 5.41876 4.7214 5.05467 5.07986C4.69058 5.43832 4.40143 5.86562 4.20407 6.33689C4.0067 6.80817 3.90506 7.314 3.90506 7.82493C3.90506 8.33587 4.0067 8.84169 4.20407 9.31297C4.40143 9.78424 4.69058 10.2115 5.05467 10.57C5.41876 10.9285 5.85053 11.2109 6.32482 11.4009C6.79912 11.5909 7.30647 11.6846 7.81734 11.6767C8.82848 11.6609 9.79286 11.2481 10.5023 10.5275C11.2118 9.80689 11.6094 8.83619 11.6094 7.82493C11.6094 6.81368 11.2118 5.84297 10.5023 5.12235C9.79286 4.40173 8.82848 3.98899 7.81734 3.97321ZM7.81734 5.32415C8.48047 5.32415 9.11643 5.58758 9.58533 6.05648C10.0542 6.52537 10.3177 7.16134 10.3177 7.82446C10.3177 8.48759 10.0542 9.12355 9.58533 9.59245C9.11643 10.0613 8.48047 10.3248 7.81734 10.3248C7.15422 10.3248 6.51826 10.0613 6.04936 9.59245C5.58046 9.12355 5.31703 8.48759 5.31703 7.82446C5.31703 7.16134 5.58046 6.52537 6.04936 6.05648C6.51826 5.58758 7.15422 5.32415 7.81734 5.32415Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                  <div className='w-auto p-4'>
                    <a
                      className='text-blueGray-400 hover:text-blueGray-500'
                      href='#'
                    >
                      <svg
                        width={16}
                        height={15}
                        viewBox='0 0 16 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M3.67326 14.8544H0.564368L0.564368 5.46737H3.67326L3.67326 14.8544ZM2.11694 4.18691C1.12295 4.18691 0.316406 3.41461 0.316406 2.48264C0.316406 2.0349 0.506105 1.6055 0.84377 1.2889C1.18144 0.972297 1.63941 0.794434 2.11694 0.794434C2.59447 0.794434 3.05244 0.972297 3.39011 1.2889C3.72778 1.6055 3.91747 2.0349 3.91747 2.48264C3.91747 3.41461 3.11093 4.18691 2.11694 4.18691ZM15.3087 14.8544H12.2068V10.2849C12.2068 9.19579 12.1832 7.79933 10.5905 7.79933C8.97418 7.79933 8.72622 8.98237 8.72622 10.2066V14.8544L5.62054 14.8544L5.62054 5.46737H8.60197V6.74784H8.64535C9.0604 6.01019 10.0742 5.23187 11.5866 5.23187C14.733 5.23187 15.3114 7.17466 15.3114 9.69793V14.8544H15.3087Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                  <div className='w-auto p-4'>
                    <a
                      className='text-blueGray-400 hover:text-blueGray-500'
                      href='#'
                    >
                      <svg
                        width={15}
                        height={13}
                        viewBox='0 0 15 13'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M15.0005 2.27494C14.4603 2.50797 13.8724 2.67569 13.2669 2.74101C13.8956 2.36751 14.3664 1.77744 14.591 1.08151C14.001 1.43246 13.3547 1.67855 12.6808 1.80887C12.3991 1.50773 12.0584 1.26784 11.68 1.10413C11.3015 0.940414 10.8934 0.856396 10.4811 0.857307C8.81277 0.857307 7.47106 2.20962 7.47106 3.86911C7.47106 4.10214 7.49931 4.33518 7.54521 4.55938C5.04715 4.42874 2.8192 3.23532 1.33802 1.40812C1.06813 1.86909 0.9267 2.39397 0.928441 2.92814C0.928441 3.97327 1.45983 4.89481 2.27015 5.4368C1.79262 5.41799 1.32626 5.28673 0.909022 5.0537V5.09077C0.909022 6.5543 1.94355 7.76714 3.32234 8.04608C3.06346 8.11332 2.79714 8.14773 2.52967 8.14847C2.33371 8.14847 2.14834 8.12905 1.96121 8.10257C2.34254 9.29599 3.45298 10.1628 4.77528 10.1911C3.74074 11.0014 2.44493 11.478 1.0379 11.478C0.785443 11.478 0.552408 11.4692 0.310547 11.441C1.6452 12.2972 3.22877 12.7915 4.93416 12.7915C10.4705 12.7915 13.4999 8.20497 13.4999 4.22395C13.4999 4.09331 13.4999 3.96267 13.4911 3.83203C14.0772 3.40304 14.591 2.87165 15.0005 2.27494Z'
                          fill='currentColor'
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

