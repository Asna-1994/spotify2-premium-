import React from 'react'

const Main = () => {
  return (
    <main>
      <section>
        <div className='hero-page '>
          <div className='flex flex-col p-20 w-2/4 gap-4'>
            <h1 className='text-5xl text-zinc-50 font-bold'>Listen without limits. Try 2 months of Premium for ₹119.</h1>
            <span className='text-white font-medium'>Only ₹119/month after. Cancel anytime.</span>
            <div className=' flex gap-3'>
              <a className='text-black font-semibold bg-red-100 py-2 px-4 rounded-3xl' href='#'>Get Premium Individual</a>
              <a className='text-white  bg-black py-2 px-4 rounded-3xl font-semibold border-1 border-zinc-400' href='#'>View all plans</a>
            </div>
            <span className='text-white text-xs'>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. <a href='#' ><u>Terms apply.</u></a></span>

          </div>

        </div>
      </section>
      <section className='section2 flex flex-col justify-center items-center gap-4 text-white'>

        <h2 className='text-center text-4xl text-white font-bold'>Experience the difference</h2>
        <span className='text-center text-white text-2xl'>Go Premium and enjoy full control of your listening. Cancel anytime.</span>

        <table cellPadding={"18"} >
          <thead>
            <tr className='spotifytable'>
              <th>What you'll get</th>
              <th>Spotify's
                Free plan</th>
              <th><div className='flex'><img className='w-6' src='./images/spotii.png'></img><span></span> Premium</div></th>
            </tr>
          </thead>
          <tbody>
            <tr className='spotifytable'>
              <td >Ad-free music listening</td>
              <td className='flex justify-center items-center'><hr className='w-5 '></hr></td>
              <td className=''><img src='/images/tick.PNG'></img></td>
            </tr>
            <tr className='spotifytable'>
              <td className='decoration'>Download to listen offline</td>
              <td className='flex justify-center items-center'><hr className='w-5 '></hr></td>
              <td className=''><img src='/images/tick.PNG'></img></td>
            </tr>
            <tr className='spotifytable'>
              <td>Play songs in any order</td>
              <td className='flex justify-center items-center'><hr className='w-5 '></hr></td>
              <td className=''><img src='/images/tick.PNG'></img></td>
            </tr>
            <tr className='spotifytable'>
              <td>High audio quality</td>
              <td className='flex justify-center items-center'><hr className='w-5 '></hr></td>
              <td className=''><img src='/images/tick.PNG'></img></td>
            </tr>
            <tr className='spotifytable'>
              <td>Listen with friends in real time</td>
              <td className='flex justify-center items-center'><hr className='w-5 '></hr></td>
              <td className=''><img src='/images/tick.PNG'></img></td>
            </tr>

            <tr className='spotifytable'>
              <td> Organize listening queue</td>
              <td className='flex justify-center items-center'><hr className='w-5 '></hr></td>
              <td className=''><img src='/images/tick.PNG'></img></td>
            </tr>

          </tbody>
        </table>


      </section>
      <section className='section2 flex flex-col justify-center items-center'>
        <div className='py-10'>
          <h2 className='text-4xl text-white font-bold text-center'>Affordable plans for any situation</h2>
          <span className='text-white font-semibold'> Choose a Premium plan and listen to ad-free music without limits on your phone, speaker, and other devices. Pay in various ways. Cancel anytime.</span>
        </div>
        <div className='flex justify-center items-center gap-5 text-white p-5'>
          <h4 className='text-3xl font-bold'>All Premium plans include</h4>
          <ul className='planlist'>
            <li className='plans'>Ad-free music listening</li>
            <li className='plans'>Download to listen offline</li>
            <li className='plans'>Play songs in any orde</li>
            <li className='plans'>High audio quality</li>
            <li className='plans'>Listen with friends in real time</li>
            <li className='plans'>Organize listening queue</li>
          </ul>
        </div>
        <div className='text-white py-4 px-9 mini-div'>
          <ul className='flex justify-evenly gap-5'>
            <li className=' rounded-xl bg-zinc-800 p-3 w-4/12'>
              <div className='flex flex-col gap-2'>
                <div className='flex'> <img className='w-7' src='./images/spotii.png'></img>
                  <span>Premium</span>
                </div>
                <h6 className='text-3xl text-lime-300 font-bold'>Mini</h6>
                <span>₹7 for 1 day</span>
              </div>
              <hr className='mt-5'></hr>
              <ul className='list-disc mt-5 p-2 font-semibold'>
                <li>1 mobile-only Premium account</li>
                <li>Offline listening of up to 30 songs on 1 device</li>
                <li>One-time payment</li>
                <li>Basic audio quality</li>
              </ul>
              <div className='mt-3 flex flex-col justify-center items-center gap-3'>
                <a className='bg-lime-300 rounded-3xl text-black py-2 px-24 font-semibold' href='#'>Get Premium Mini</a>
                <a href='#' className='text-xs mb-5 text-gray-300'><u>Terms apply.</u></a>
              </div>

            </li>
            <li className=' rounded-xl bg-zinc-800 p-3 w-4/12'>
              <div className='bg-pink'>
                <span>₹119 for 2 months</span>
              </div>
              <div className='flex flex-col gap-3'>
                <div className='flex'> <img className='w-7' src='./images/spotii.png'></img>
                  <span>Premium</span>
                </div>
                <h6 className='text-3xl text-pink-200 font-bold'>Individual</h6>
                <div className='flex flex-col'>
                  <span className='font-bold'>₹119 for 2 months</span>
                  <span className=' text-gray-300 text-sm'>₹119 / month after</span>
                </div>

              </div>
              <hr className='mt-5'></hr>
              <ul className='list-disc mt-5 p-2 font-semibold'>
                <li>1 verified Premium account</li>
                <li>Discount for eligible students</li>
                <li>Subscribe or one-time payment</li>
            
              </ul>
              <div className='mt-3 flex flex-col justify-center items-center gap-3'>
                <a className='bg-pink-200 rounded-3xl text-black py-2 px-24 font-semibold' href='#'>Get Premium Mini</a>
              <span className='text-xs text-gray-300 text-center'>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before.  <a href='#' className='text-xs '><u>Terms apply.</u></a></span>
              </div>

            </li>
            <li className=' rounded-xl bg-zinc-800 p-3 w-4/12'>
              <div className='flex flex-col gap-3'>
                <div className='flex'> <img className='w-7' src='./images/spotii.png'></img>
                  <span>Premium</span>
                </div>
                <h6 className='text-3xl text-violet-300 font-bold'>Individual</h6>
                <div className='flex flex-col'>
                  <span className='font-bold'>₹59 for 2 months</span>
                  <span className=' text-gray-300 text-sm'>₹59 / month after</span>
                </div>

              </div>
              <hr className='mt-5'></hr>
              <ul className='list-disc mt-5 p-2 font-semibold'>
                <li>1 Premium account</li>
                <li>Cancel anytime</li>
                <li>Subscribe or one-time payment</li>
            
              </ul>
              <div className='mt-3 flex flex-col justify-center items-center gap-3'>
                <a className='bg-violet-300 rounded-3xl text-black py-2 px-24 font-semibold' href='#'>Get Premium Mini</a>
              <span className='text-center text-xs text-gray-300'>₹59 for 2 months, then ₹59 per month after. Offer available only to students at an accredited higher education institution and if you 
              haven't tried Premium before. Terms apply. <a href='#' className='text-xs '><u>Terms apply.</u></a></span>
              </div>

            </li>
          </ul>
        </div>

      </section>
      <section className="section3 container text-white px-5 ">
        <div className='flex flex-col justify-center items-center gap-2 text-white'>
          <h3 className="question-heading text-center fw-bold  p-3">
            Questions?
          </h3>
          <span className='text-center'>We've got answers.</span>
          <span className='text-sm'>Find more answers in our <a href='#'>
            <u>support site.</u></a></span>
        </div>

        <div className="question-list ">
          <div className="question-list-item d-flex justify-content-between align-items-center p-4">
            <span className="question fw-bold">How does the Spotify Premium trial work?</span>
            <img className="down-arrow" src="./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg" />
          </div>
          <div className="question-list-item d-flex justify-content-between align-items-center  p-4">
            <span className="question fw-bold">How do I cancel my Premium plan?</span>
            <img className="down-arrow" src="./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg" />
          </div>
          <div className="question-list-item d-flex justify-content-between align-items-center p-4">
            <span className="question fw-bold">How does the Premium Duo plan work?</span>
            <img className="down-arrow" src="./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg" />
          </div>
          <div className="question-list-item d-flex justify-content-between align-items-center p-4">
            <span className="question fw-bold">How does the Premium Family plan work?</span>
            <img className="down-arrow" src="./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg" />
          </div>
          <div className="question-list-item d-flex justify-content-between align-items-center p-4">
            <span className="question fw-bold">How does the Premium Student Plan work?</span>
            <img className="down-arrow" src="./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg" />
          </div>
          <div className="question-list-item d-flex justify-content-between align-items-center p-4">
            <span className="question fw-bold">How much is Spotify Premium in India?</span>
            <img className="down-arrow" src="./images/expand_more_FILL0_wght400_GRAD0_opsz24.svg" />
          </div>
        </div>
      </section>

    </main>
  )
}

export default Main