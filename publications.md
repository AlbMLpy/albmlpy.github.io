---
layout: page
title: Publications
permalink: /publications/
description: Publications and research papers by Albert Saiapin in machine learning, tensor methods, recommender systems, and federated learning.
---

Selected publications are listed below. For a full list, see my [Google Scholar profile](https://scholar.google.com/citations?user=k3t9iugAAAAJ&hl=en).

{% include paper.html
title="Tensor Network Kernel Machines: A JAX Framework for Machine Learning and Nonlinear System Identification"
meta="ArXiv preprint, 2026 | Machine Learning · System Identification · Low-Rank Approximation · Kernel Methods · Software"
paper_url="https://arxiv.org/abs/2608.07043"
code_url="https://github.com/AlbMLpy/tnkm/tree/main/experiments"
image="/images/papers/TNKM_Lib.png"
summary=" Developing nonlinear models that are both expressive and computationally efficient remains a challenge in machine learning and nonlinear system identification. Tensor network kernel machines (TNKM) address this challenge by combining nonlinear feature representations with compact low-rank tensor-network parameterizations. However, practical and extensible software frameworks for developing TNKM models remain limited. In this work, we introduce **tnkm**, an open-source Python library for constructing and training TNKM models using JAX. The library provides a unified interface for combining different feature maps, tensor-network architectures, and optimization strategies, including alternating least squares and gradient-based methods. We demonstrate the capabilities of **tnkm** on nonlinear benchmark problems, showing that the implemented models achieve competitive prediction accuracy while retaining compact parameterizations and efficient training. The proposed framework facilitates reproducible development and application of tensor-network-based learning methods. "
%}

{% include paper.html
title="Laplace Approximation For Bayesian Tensor Network Kernel Machines"
meta="ArXiv preprint, 2026 | Machine Learning · Bayesian Inference · Tensor Networks · Uncertainty Estimation · Kernel Methods "
paper_url="https://arxiv.org/abs/2604.26673"
code_url="https://github.com/AlbMLpy/laplace-tnkm"
image="/images/papers/LA-TNKM_hess.png"
summary=" Uncertainty estimation is essential for robust decision-making in the presence of ambiguous or out-of-distribution inputs. Gaussian Processes (GPs) are classical kernel-based models that offer principled uncertainty quantification and perform well on small- to medium-scale datasets. Alternatively, formulating the weight space learning problem under tensor network assumptions yields scalable tensor network kernel machines. However, these assumptions break Gaussianity, complicating standard probabilistic inference. This raises a fundamental question: how can tensor network kernel machines provide principled uncertainty estimates? We propose a novel Bayesian Tensor Network Kernel Machine (LA-TNKM) that employs a (linearized) Laplace approximation for Bayesian inference. A comprehensive set of numerical experiments shows that the proposed method consistently matches or surpasses Gaussian Processes and Bayesian Neural Networks (BNNs) across diverse UCI regression benchmarks, highlighting both its effectiveness and practical relevance. "
%}

{% include paper.html
title="Laplace Approximation For Tensor Train Kernel Machines In System Identification"
meta="ArXiv preprint, 2025 | System Identification · Bayesian Inference · Tensor Trains · Kernel Methods "
paper_url="https://arxiv.org/abs/2512.02532"
code_url="https://github.com/AlbMLpy/laplace-ttkm"
image="/images/papers/LA-TTKM_preds.png"
summary=" To address the scalability limitations of Gaussian process (GP) regression, several approximation techniques have been proposed. One such method is based on tensor networks, which utilizes an exponential number of basis functions without incurring exponential computational cost. However, extending this model to a fully probabilistic formulation introduces several design challenges. In particular, for tensor train (TT) models, it is unclear which TT-core should be treated in a Bayesian manner. We introduce a Bayesian tensor train kernel machine that applies Laplace approximation to estimate the posterior distribution over a selected TT-core and employs variational inference (VI) for precision hyperparameters. Experiments show that core selection is largely independent of TT-ranks and feature structure, and that VI replaces cross-validation while offering up to 65x faster training. The method's effectiveness is demonstrated on an inverse dynamics problem. "
%}

{% include paper.html
title="Tensor Network Based Feature Learning Model"
meta="AISTATS, 2025 | Machine Learning · Tensor Methods · Feature Learning · Kernel Methods "
paper_url="https://proceedings.mlr.press/v258/saiapin25a.html"
code_url="https://github.com/AlbMLpy/TN-FL-Model"
image="/images/papers/FL_TNKM.png"
summary="We introduce the Feature Learning (FL) model, where tensor-product features are represented using a learnable CP decomposition. The method jointly learns feature hyperparameters and model parameters with ALS optimization, achieving 3–5× faster training while maintaining comparable predictive quality."
%}

{% include paper.html
title="Federated Privacy-Preserving Collaborative Filtering For On-Device Next App Prediction"
meta="UMUAI, The Journal of Personalization Research, 2024 | Collaborative Filtering · Federated Learning · Matrix Factorization "
paper_url="https://link.springer.com/article/10.1007/s11257-024-09395-0"
image="/images/papers/SeqMF.png"
summary=" In this study, we propose a novel SeqMF model to solve the problem of predicting the next app launch during mobile device usage. We modify the structure of the classical matrix factorization model and update the training procedure to sequential learning. Since the data about user experience are distributed among devices, the *federated learning setup* is used to train the proposed *sequential matrix factorization model*. One more ingredient of our approach is a new privacy mechanism that guarantees the protection of the sent data from the users to the remote server. To demonstrate the efficiency of the proposed model, we use publicly available mobile user behavior data. We compare our model with sequential rules and models based on the frequency of app launches. Our experiments show that the proposed model provides comparable quality with other methods different environments. "
%}

{% include paper.html
title="Dynamical Collaborative Filtering Recommender System"
meta="ArXiv preprint, 2023 | Collaborative Filtering · Sequence-Aware Tensor Factorization · Incremental Learning "
paper_url="https://arxiv.org/abs/2312.10064"
code_url="https://github.com/AlbMLpy/DynamicCF"
image="/images/papers/Tireca.png"
summary=" In production applications of recommender systems, a continuous data flow is used to update models in real-time. Many recommender models require complete retraining to adapt to new data. In this work, we introduce a novel collaborative filtering model for sequential problems, called the *Tucker Integrator* Recommender (TIRecA). TIRecA efficiently updates its parameters using only new data segments, allowing for the incremental addition of new users and items to the recommender system.
To demonstrate the effectiveness of the proposed model, we conducted experiments on four publicly available datasets: MovieLens 20M, Amazon Beauty, Amazon Toys and Games, and Steam. Our comparison with general matrix- and tensor-based baselines, in terms of prediction quality and computational time, reveals that TIRecA achieves comparable prediction accuracy while being 10–20 times faster in training time. "
%}

{% include paper.html
title="MEKER: Memory Efficient Knowledge Embedding Representation for Link Prediction and Question Answering"
meta="ACL, 2022 | Knowledge Graph Embeddings · Question Answering · Tensor Decomposition "
paper_url="https://aclanthology.org/2022.acl-srw.27/"
code_url="https://github.com/AlbMLpy/meker"
image="/images/papers/MEKER.png"
summary=" *Knowledge Graphs (KGs)* are symbolically structured storages of facts. The KG embedding contains concise data used in NLP tasks requiring implicit information about the real world. Furthermore, the size of KGs that may be useful in actual NLP assignments is enormous, and creating embedding over it has memory cost issues. We represent KG as a 3rd-order binary tensor and move beyond the standard *CP decomposition* (Hitchcock, 1927) by using a data-specific generalized version of it (Hong et al., 2020). The generalization of the standard CP-ALS algorithm allows obtaining optimization gradients without a backpropagation mechanism. It reduces the memory needed in training while providing computational benefits. We propose a MEKER, a memory-efficient KG embedding model, which yields SOTA-comparable performance on link prediction tasks and KG-based Question Answering. "
%}
