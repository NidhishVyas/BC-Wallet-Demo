import type { CustomCharacter } from '../src/content/types'

const currentDate = new Date().toLocaleDateString('en-US').split('/')
const todayDate = parseInt(
  currentDate[2] +
    (currentDate[0].length === 1 ? '0' + currentDate[0] : currentDate[0]) +
    (currentDate[1].length === 1 ? '0' + currentDate[1] : currentDate[1])
)

export const lawyerCustom: CustomCharacter = {
  name: 'Bob Johnson',
  type: 'Ford Mustang 2017',
  image: '/public/lawyer2/blue_front.svg',
  revocationInfo: [
    {
      credentialName: 'Proof',
      credentialIcon: '/public/lawyer2/bob_logo.svg',
      title: 'Revoke your vehicle credential',
      description:
        'FHWA VDKMS CA allows you to revoke your vehicle credential "if":\n• there is a problem with your credential.\n• your device was lost or stolen and you want to secure your personal information.',
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
      title: 'Meet Bob',
      text: "Meet Bob (that's you in this demo!). Bob owns a Ford Mustang. He feels getting vehicle credentials will make his life easier and wants to get them.",
    },
    {
      screenId: 'SETUP_START',
      title: "Let's get started!",
      text: 'FHWA Vehicle End is a new mobile application that allows you to save and use credentials on your car. This demo will walk you through two scenarios that will eventually be implemented in real-world applications.',
      image: '/public/common/FHWA-Logo.svg',
    },
    {
      screenId: 'CHOOSE_WALLET',
      title: 'Install FHWA Vehicle End',
      text: 'First, install the FHWA Vehicle End app onto your smartphone. Select the button below for instructions and the next step.',
      image: '/public/common/app-store-screenshots.png',
    },
    {
      screenId: 'CONNECT',
      title: 'Connect with CA (Certificate Authority)',
      text: 'Imagine, as Bob, you are connected with a CA. They want to offer you your credentials. Use your app to scan the QR code from the website.',
      image: '/public/lawyer2/blue_side.svg',
      issuer_name: 'FHWA VDKMS CA',
    },
    {
      screenId: 'ACCEPT_CREDENTIAL',
      title: 'Accept your vehicle credential',
      text: "Your wallet now has a secure and private connection with CA. You should have received an offer in FHWA Vehicle End application for a vehicle credential.\nReview what they are sending, and choose 'Accept offer'.",
      image: '/public/lawyer2/blue_side.svg',
      credentials: [
        {
          name: process.env.SCHEMA_NAME ?? '',
          version: '1.2',
          icon: '/public/lawyer2/lawyer2.svg',
          attributes: [
            {
              name: 'registration_number',
              value: '2054691837',
            },
            {
              name: 'vin',
              value: '5XYZWDLA9DG123456',
            },
            {
              name: 'vehicle_information',
              value: 'Ford Mustang 2017',
            },
            {
              name: 'issued',
              value: new Date().toISOString(),
            },
            {
              name: 'owner_address',
              value: '234 Elm Court, Miami, FL, 33101',
            },
            {
              name: 'vehicle_owner',
              value: 'Bob Johnson',
            },
            {
              name: 'state_issued',
              value: 'Florida',
            },
            {
              name: 'expiry_date',
              value: '20210304',
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
      text: 'Congratulations, you’ve just received your first vehicle credentials. They are safely stored in your wallet and ready to be used. So, what are you waiting for? Let’s go!',
      image: '/public/lawyer2/blue_done.svg',
    },
  ],
  useCases: [
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      screens: [
        {
          screenId: 'START',
          title: 'Connecting with infrastructure',
          text: "Bob (that's you in this demo!) needs to send to connect to the infrastrcture. In this example, you will just connect to the infrastructure without sending your credentials.",
          image: '/public/lawyer2/blue_done.svg',
        },
        {
          screenId: 'CONNECTION',
          title: "Connect to the Infrastructure",
          text: "Imagine, as Bob, you want to connect to the infrastructure. First, scan the QR code and you will be able to communicate with the infrastructure.",
          image: '/public/common/background.png',
          verifier: { name: 'Infrastructure', icon: '/public/student/useCases/store/logo-university.png' },
        },
        // {
        //   screenId: 'PROOF',
        //   title: 'Confirm the information to send',
        //   text: "FHWA Vehicle End will now ask you to confirm what to send. Notice how it will only share if the credential has expired, not even the expiry date itself gets shared. You don't have to share anything else for it to be trustable.",
        //   requestOptions: {
        //     title: 'Cool Clothes Online Request',
        //     text: 'Cool Clothes Online would like some of your personal information.',
        //     requestedCredentials: [
        //       {
        //         icon: '/public/student/useCases/school/icon-university-card.png',
        //         name: process.env.CRED_NAME ?? '',
        //         properties: ['vehicle_owner'],
        //       },
        //     ],
        //   },
        // },
        {
          screenId: 'STEP_END',
          title: "You're done!",
          text: "You are now connected to the infrastructure. You will now recieve messages about your environment conditions. You can also send messages back. ",
          image: '/public/lawyer2/blue_final.svg',
        },
      ],
    },
    {
      id: 'charlie',
      name: 'Charlie',
      screens: [
        {
          screenId: 'START',
          title: 'Verify credentials',
          text: "Charlie wants to connect with you but wants to first confirm if they’re interacting with the correct vehicle. In this example, you'll need to present some information from your Vehicle Credential, but just what's needed to verify your credentials.",
          image: '/public/lawyer2/blue_done.svg',
        },
        {
          screenId: 'CONNECTION',
          title: 'Start verifying the credentials',
          text: "Imagine you've connected with Charlie. Now they just need to confirm a few details. Scan the QR code to continue.",
          image: '/public/common/background.png',
          verifier: { name: 'Charlie', icon: '/public/lawyer2/carfront.svg' },
        },
        {
          screenId: 'PROOF',
          title: 'Confirm the information to send',
          text: "Charlie will now ask you to confirm what to send for the proof request. Notice how they only need some of your attributes and they will also display it on the screen. By providing anything from your vehicle credential, they automatically know your credential hasn't been expired.",
          requestOptions: {
            title: 'Credential Request',
            text: 'Charlie would like some of your personal information.',
            requestedCredentials: [
              {
                icon: '/public/student/useCases/school/icon-university-card.png',
                name: process.env.CRED_NAME ?? '',
                properties: ['vehicle_owner', 'vehicle_information', 'state_issued'],
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
          text: 'You are now verified. Just by proving your credential, Charlie could trust you are a verified vehicle without revealing too much about you and all your credential attributes.',
          image: '/public/lawyer2/blue_final.svg',
        },
      ],
    },
  ],
}
