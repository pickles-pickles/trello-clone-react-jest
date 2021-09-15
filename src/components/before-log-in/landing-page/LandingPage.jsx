import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../../Context'
import Apps from './Apps'
import Checkout from './Checkout'
import CustomerStories from './CustomerStories'
import Header from './Header'
import Product from './Product'
import Signup from './Signup'
import Footer from '../footer/Footer'

const LandingPage = () => {
  const [appState, setAppState] = useContext(Context)

  return (
    <>
      <Header></Header>
      <section id='hero'>
        <div className='container pt-7 pb-6 text-center text-md-left'>
          <div className='row d-flex align-items-center'>
            <div className='col-lg-5 offset-lg-1 order-2'>
              <img
                src='assets/landing-page/hero.png'
                alt=''
                className='img-fluid'
              />
            </div>
            <div className='col-lg-6'>
              <h1>Trello helps teams move work forward.</h1>
              <p>
                Collaborate, manage projects, and reach new productivity peaks.
                From high rises to the home office, the way your team works is
                unique—accomplish it all with Trello.
              </p>
              <form
                className='row my-5'
                onSubmit={e => {
                  e.preventDefault()
                  // $$ to be removed in production
                  console.log(appState.emailValue)
                }}
              >
                <div className='d-none d-md-block col-md-7 pr-md-2'>
                  <input
                    className='form-control h-100'
                    name='email'
                    type='email'
                    onChange={e => {
                      setAppState({ ...appState, emailValue: e.target.value })
                      // $$ to be removed in production
                      console.log(appState.emailValue)
                    }}
                  />
                </div>
                <div className='col-md-5 pl-md-2'>
                  <Link to='/signup' className='text-white'>
                    <button
                      className='btn btn-wrap btn-primary btn-block px-4 text-decoration-none'
                      type='submit'
                      id='its-free'
                    >
                      Sign up - it's free!
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Product></Product>
      <section id='features'>
        <div className='container'>
          <div className='row py-4'>
            <div className='col-lg-6'>
              <h2>Features to help your team succeed</h2>
              <p>
                Powering a productive team means using a powerful tool (and
                plenty of snacks). From meetings and projects to events and goal
                setting, Trello’s intuitive features give any team the ability
                to quickly set up and customize workflows for just about
                anything.
              </p>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-5 mb-3 mb-md-0'>
              <img
                src='assets/landing-page/view.svg'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-7'>
              <h5>Choose a view</h5>
              <h2>The board is just the beginning</h2>
              <p className='text-secondary'>
                Lists and cards are the building blocks of organizing work on a
                Trello board. Grow from there with task assignments, timelines,
                productivity metrics, calendars, and more.
              </p>
              <div className=''>
                <h3>
                  <p
                    type='button'
                    onClick={() => {
                      setAppState({ ...appState, collapse: !appState.collapse })
                    }}
                  >
                    + Learn more
                  </p>
                </h3>

                <div className={appState.collapse ? 'd-block' : 'd-none'}>
                  <p>
                    You and your team can start up a Trello board in seconds.
                    With the ability to view board data from many different
                    angles, the entire team stays up-to-date in the way that
                    suits them best:
                  </p>
                  <ul>
                    <li>Use a Timeline view for project planning</li>
                    <li>Calendar helps with time management</li>
                    <li>Table view connects work across boards</li>
                    <li>See board stats with Dashboard, and more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-5 order-md-2 mb-3 mb-md-0'>
              <img
                src='assets/landing-page/card-back.svg'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-7'>
              <h5>Dive into the details</h5>
              <h2>Cards contain everything you need</h2>
              <p className='text-secondary'>
                Trello cards are your portal to more organized work—where every
                single part of your task can be managed, tracked, and shared
                with teammates. Open any card to uncover an ecosystem of
                checklists, due dates, attachments, conversations, and more.
              </p>
              <div>
                <h3
                  type='button'
                  onClick={() => {
                    setAppState({ ...appState, collapse2: !appState.collapse2 })
                  }}
                >
                  + Learn more
                </h3>
                <div className={appState.collapse2 ? 'd-none' : 'd-block'}>
                  <p>
                    Spin up a Trello card with a click, then uncover everything
                    it can hold. Break down bigger card tasks into steps with
                    file attachment previews, reminders, checklists and
                    comments—emoji reactions included! Plus, gain powerful
                    perspective by seeing all cards by list and status at the
                    board level.
                  </p>
                  <p>Your team can:</p>
                  <ul>
                    <ul>
                      <li>Manage deadlines</li>
                      <li>Provide and track feedback</li>
                      <li>Assign tasks and hand off work</li>
                      <li>Connect work across apps</li>
                    </ul>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-5 mb-3 mb-md-0'>
              <img
                src='assets/landing-page/automation.png'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-7'>
              <h5>Meet your new Butler</h5>
              <h2>No-code automation</h2>
              <p className='text-secondary'>
                Let the robots do the work—so your team can focus on work that
                matters. With Trello’s built-in automation, Butler, reduce the
                number of tedious tasks (and clicks) on your project board by
                harnessing the power of automation across your entire team.
              </p>
              <div>
                <h3
                  type='button'
                  onClick={() => {
                    setAppState({ ...appState, collapse3: !appState.collapse3 })
                  }}
                >
                  + Learn more
                </h3>
                <div className={appState.collapse3 ? 'd-none' : 'd-block'}>
                  <p>
                    Butler uses natural language commands to automate just about
                    any task in Trello:
                  </p>
                  <ul>
                    <li>Automate common actions like moving lists</li>
                    <li>Create custom buttons to build process quickly</li>
                    <li>Surface upcoming deadlines to the team</li>
                    <li>Schedule teammate assignments, and more!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-5 order-md-2 mb-3 mb-md-0'>
              <img
                src='assets/landing-page/power-ups.png'
                alt=''
                className='img-fluid w-100'
              />
            </div>
            <div className='col-md-7'>
              <h5>Power-Ups</h5>
              <h2>Integrate top work tools</h2>
              <p className='text-secondary'>
                Easily connect the apps your team already uses into your Trello
                workflow, or add a Power-Up that helps fine-tune one specific
                need. With hundreds of Power-Ups available, your team’s workflow
                wishes are covered.
              </p>
              <div>
                <h3
                  type='button'
                  onClick={() => {
                    setAppState({ ...appState, collapse4: !appState.collapse4 })
                  }}
                >
                  + Learn more
                </h3>
                <div className={appState.collapse4 ? 'd-none' : 'd-block'}>
                  <p>
                    From Reporting to Custom Fields to your beloved software
                    integrations—we’ve got functionalities, your favorites, and
                    more!
                  </p>
                  <p>Such as:</p>
                  <ul>
                    <li>Confluence</li>
                    <li>Slack</li> <li>Dropbox</li> <li>Google Drive</li>
                    <li>Evernote</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Checkout></Checkout>
      <CustomerStories></CustomerStories>
      <Signup></Signup>
      <Apps></Apps>
      <Footer></Footer>

      <section className='d-flex align-items-center justify-content-center'>
        <p id='copyright'>&nbsp;© Copyright 2021. All rights reserved.</p>
      </section>
    </>
  )
}

export default LandingPage
