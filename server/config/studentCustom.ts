import type { CustomCharacter } from '../src/content/types'

const currentDate = new Date().toLocaleDateString('en-US').split('/')
const todayDate = parseInt(
  currentDate[2] +
    (currentDate[0].length === 1 ? '0' + currentDate[0] : currentDate[0]) +
    (currentDate[1].length === 1 ? '0' + currentDate[1] : currentDate[1])
)

export const studentCustom: CustomCharacter = {
  name: 'Alice Smith',
  type: 'Toyota Camry 2021',
  image: '/public/student/student.svg',
  revocationInfo: [
    {
      credentialName: 'Proof',
      credentialIcon: '/public/student/icon-student.svg',
      title: 'Revoke your Student Card',
      description:
        'Best BC College allows you to revoke your Student Card "if":\n• there is a problem with your credential.\n• your device was lost or stolen and you want to secure your personal information.',
    },
  ],
  progressBar: [
    {
      name: 'person',
      onboardingStep: 'PICK_CHARACTER',
      iconLight: '/public/common/icon-person-light.svg',
      iconDark: '/public/common/icon-person-dark.svg',
    },
    {
      name: 'moon',
      onboardingStep: 'SETUP_START',
      iconLight: '/public/common/icon-moon-light.svg',
      iconDark: '/public/common/icon-moon-dark.svg',
    },
    {
      name: 'wallet',
      onboardingStep: 'CHOOSE_WALLET',
      iconLight: '/public/common/icon-wallet-light.svg',
      iconDark: '/public/common/icon-wallet-dark.svg',
    },
    {
      name: 'notification',
      onboardingStep: 'ACCEPT_CREDENTIAL',
      iconLight: '/public/common/icon-notification-light.svg',
      iconDark: '/public/common/icon-notification-dark.svg',
    },
    {
      name: 'balloon',
      onboardingStep: 'SETUP_COMPLETED',
      iconLight: '/public/common/icon-balloon-light.svg',
      iconDark: '/public/common/icon-balloon-dark.svg',
    },
  ],
  onboarding: [
    {
      screenId: 'PICK_CHARACTER',
      title: 'Meet Alice',
      text: "Meet Alice Smith (that's you in this demo!). Alice is a student at a college. To help make student life easier, Alice took a Toyato vehicle and now needs digital credentials to verify her vehicle credential.",
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'FHWA is a new app for storing and using credentials on your smartphone. Credentials are things like IDs, licenses and diplomas. \nUsing your FHWA is fast and simple. In the future it can be used online and in person. You approve every use, and share only what is needed. \nIn this demo, you will use two credentials to prove who you are and access court materials online instead of in-person.',
      image: '/public/common/FHWA-Logo.svg',
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install FHWA',
      text: 'First, install the FHWA app onto your smartphone. Select the button below for instructions and the next step.',
      image: '/public/common/app-store-screenshots.png',
    },
    {
      screenId: 'CONNECT',
      title: 'Connect with VDKMS CA (Certificate Authority)',
      text: 'Imagine, as Alice, you are connected with a VDKMS CA. They want to offer you your credentials. Use your app to scan the QR code from the website.',
      image: '/public/student/onboarding-connect-light.svg',
      issuer_name: 'FHWA VDKMS CA',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your vehicle credential',
      text: "Your wallet now has a secure and private connection with CA. You should have received an offer in FHWA for a vehicle credential.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/student/onboarding-connect-light.svg',
      credentials: [
        {
          name: process.env.SCHEMA_NAME ?? '',
          version: '1.2',
          icon: '/public/student/icon-student.svg',
          attributes: [
            {
              name: 'vehicle_name',
              value: 'Toyato Camry 2021',
            },
            {
              name: 'issued',
              value: '03-10-2024',
            },
            {
              name: 'owner_address',
              value: '123 Maple Street, Austin, TX, 78701',
            },
            {
              name: 'registration_number',
              value: '8625147390'
            },
            {
              name: 'vin',
              value: 'JH4KA8269MC002371'
            },
            {
              name: 'vehicle_owner',
              value: 'Alice',
            },
            {
              name: 'region_issued',
              value: 'Texas',
            },
            {
              name: 'expiry_date',
              value: '20260304',
            },
            {
              name: 'photo_id',
              value: '*',
            },
          ],
        },
      ],
    },
    {
      screenId: 'SETUP_COMPLETED',
      title: "You're all set!",
      text: 'Congratulations, you’ve just received your first digital credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
      image: '/public/student/onboarding-connect-light.svg',
    },
  ],
  useCases: [
    {
      id: 'clothesOnline',
      name: 'Infrastructure',
      screens: [
        {
          screenId: 'START',
          title: 'Connecting with infrastructure',
          text: "Alice (that's you in this demo!) needs to send her credentials to connect to the infrastrcture. In this example, you will just send the infrastructure your complete credentials.",
          image: '/public/student/useCases/store/card-school.svg',
        },
        {
          screenId: 'CONNECTION',
          title: "Start proving you're a student",
          text: "Imagine, as Alice, you are in the checkout process for Cool Clothes Online. They're offering you a 15% discount on your purchase if you can prove you're a student. First, scan the QR code.",
          image: '/public/student/useCases/store/background.png',
          verifier: { name: 'Infrastructure', icon: '/public/student/useCases/store/logo-university.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "FHWA will now ask you to confirm what to send. Notice how it will only share if the credential has expired, not even the expiry date itself gets shared. You don't have to share anything else for it to be trustable.",
          requestOptions: {
            title: 'Cool Clothes Online Request',
            text: 'Cool Clothes Online would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/student/useCases/school/icon-university-card.png',
                name: process.env.CRED_NAME ?? '',
                properties: ['vehicle_owner'],
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "You proved that you're a student, and Cool Clothes Online gave you the discount. It only took a few seconds, you revealed minimal information, and Cool Clothes Online could easily and automatically trust what you sent.",
          image: '/public/student/student-accepted.svg',
        },
      ],
    },
    {
      id: 'study',
      name: 'Bob',
      screens: [
        {
          screenId: 'START',
          title: 'Book a study room',
          text: "Alice has lots of work to do, and needs a study room for some peace and quiet. In this example, we'll present some info from our Student Card, but just what's needed to book the room.",
          image: '/public/student/useCases/school/card-school.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start booking the room',
          text: "Imagine you're on the room booking page for FHWA College, abd you've chosen a data and time. Now they just need to confirm a few details. Scan the QR code to continue.",
          image: '/public/student/useCases/school/best-bc-college-no-overlay.png',
          verifier: { name: 'FHWA College', icon: '/public/student/useCases/school/logo-university.png' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "FHWA will now ask you to confirm what to send for the booking. Notice how they only need your first name so they can display it on the booking screen. By providing anything from your student card, they automatically know your student card hasn't been revoked.",
          requestOptions: {
            title: 'FHWA College Request',
            text: 'FHWA College would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/student/useCases/school/icon-university-card.png',
                name: process.env.CRED_NAME ?? '',
                properties: ['vehicle_owner', 'vehicle_name'],
                predicates: {
                  name: 'expiry_date',
                  type: '>=',
                  value: todayDate,
                },
              },
            ],
          },
        },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "The room is booked. Just by proving your first name, Best BC College could trust you are a current student, and could let others know there's a booking without revealing too much about you.",
          image: '/public/student/student-accepted.svg',
        },
      ],
    },
  ],
}
