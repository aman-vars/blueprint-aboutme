interface Experience {
  organization: string
  focus: string
  description: string
}

interface Profile {
  name: string
  interests: string
  bio: string
  links: { label: string; url: string }[]
  experience: Experience[]
}

export const profile: Profile = {
  name: 'Aman Varshney',
  interests: 'Infrastructure, security & explainable ML',
  bio: 'I’m a computer science student at UC Santa Cruz interested in cloud and security. This past summer, I helped modernize cloud infrastructure at IBM, building on experience from an Uber fellowship and research in neural network interpretability. On campus, I organize events with HackDev to give UCSC’s developer community leverage and experience with top tech companies. I’m also working with Blueprint to help local nonprofits build out their digital infrastructure.',
  links: [
    { label: 'GitHub', url: 'https://github.com/aman-vars' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/amanvarshney-/' },
  ],
  experience: [
    {
      organization: 'IBM',
      focus: 'SWE Intern',
      description: 'Debugged infrastructure-as-code modules, investigated VPC packet traffic, and automated NACL provisioning and subnet assignment. Built integration tests and a VPC deployment path across dev, stage, and prod while maintaining the legacy path for existing customers.',
    },
    {
      organization: 'Uber',
      focus: 'Fellow',
      description: 'Practiced data structures and algorithms through tailored assignments, technical workshops, and mock interviews. Learned from guest speakers about industry work, change, and career growth.',
    },
  ],
}
