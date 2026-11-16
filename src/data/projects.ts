export interface Project {
  id: string
  name: string
  category: string
  description: string
  contribution: string
  highlight: string
  technologies: string[]
  repositoryUrl: string | null
  demoUrl: string | null
}

// null URLs render as explicitly marked placeholders, never fabricated links.
export const projects: Project[] = [
  {
    id: 'memory-wrap',
    name: 'Memory Wrap',
    category: 'Explainable machine learning',
    description: 'Memory selection strategies for self-explainable neural networks, with the goal of improving interpretability and explainability.',
    contribution: 'Designed and benchmarked selection strategies. Implemented Top-K and clustering, which were the most promising approaches in our experiments.',
    highlight: 'Top-K & clustering',
    technologies: ['Neural networks', 'Top-K', 'Clustering'],
    repositoryUrl: 'https://github.com/aman-vars/memory-wrap-aiea',
    demoUrl: null,
  },
  {
    id: 'pancake',
    name: 'Pancake',
    category: 'Cloud security',
    description: 'A cybersecurity framework aimed at mitigating implicit information leakage in client–server cloud data exchanges.',
    contribution: 'Reimplemented a USENIX paper in Python with selective key replication, dynamic replica swapping, and batching.',
    highlight: 'Paper reimplementation',
    technologies: ['Python', 'Key replication', 'Batching'],
    repositoryUrl: 'https://github.com/aman-vars/Pancake-108c',
    demoUrl: null,
  },
  {
    id: 'bctumor',
    name: 'BCTumor',
    category: 'Medical image segmentation',
    description: 'A U-Net CNN that classifies and masks tumors in MRI images, with a reported accuracy of 90%.',
    contribution: 'Led preprocessing pipeline to address limited dataset and underfitting. Augmented the dataset to 3× its size using rotation and warping.',
    highlight: '3× training data',
    technologies: ['U-Net', 'CNN', 'Data augmentation'],
    repositoryUrl: 'https://github.com/DanielRhee/BreastCancerTumorSegmentation',
    demoUrl: null,
  },
]
