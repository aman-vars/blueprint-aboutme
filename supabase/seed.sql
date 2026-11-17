-- Initial published portfolio content, copied verbatim from src/data/projects.ts.
-- Run after the migration. Re-running preserves existing rows and publication edits.
begin;

insert into public.projects (
  slug, name, category, description, contribution, highlight, technologies,
  repository_url, demo_url, display_order, published
) values
  ('memory-wrap', 'Memory Wrap', 'Explainable machine learning', 'Memory selection strategies for self-explainable neural networks, with the goal of improving interpretability and explainability.', 'Designed and benchmarked selection strategies. Implemented Top-K and clustering, which were the most promising approaches in our experiments.', 'Top-K & clustering', ARRAY['Neural networks', 'Top-K', 'Clustering']::text[], 'https://github.com/aman-vars/memory-wrap-aiea', NULL, 1, true),
  ('pancake', 'Pancake', 'Cloud security', 'A cybersecurity framework aimed at mitigating implicit information leakage in client–server cloud data exchanges.', 'Reimplemented a USENIX paper in Python with selective key replication, dynamic replica swapping, and batching.', 'Paper reimplementation', ARRAY['Python', 'Key replication', 'Batching']::text[], 'https://github.com/aman-vars/Pancake-108c', NULL, 2, true),
  ('bctumor', 'BCTumor', 'Medical image segmentation', 'A U-Net CNN that classifies and masks tumors in MRI images, with a reported accuracy of 90%.', 'Led preprocessing pipeline to address limited dataset and underfitting. Augmented the dataset to 3× its size using rotation and warping.', '3× training data', ARRAY['U-Net', 'CNN', 'Data augmentation']::text[], 'https://github.com/DanielRhee/BreastCancerTumorSegmentation', NULL, 3, true)
on conflict (slug) do nothing;

commit;
