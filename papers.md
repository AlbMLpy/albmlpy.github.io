---
layout: page
title: Research Papers
permalink: /papers/
---

- **[Tensor Network Based Feature Learning Model](#)** - *AISTATS, 2025*  

  In this paper, we introduce the Feature Learning (FL) model, where tensor-product features are represented as a learnable *Canonical Polyadic Decomposition (CPD)*. By leveraging this CPD structure, we efficiently learn the hyperparameters associated with different features alongside the model parameters using an *Alternating Least Squares (ALS)* optimization method. We prove the effectiveness of the FL model through experiments on real data of various dimensionality and scale. The results show that the FL model can be consistently trained 3-5 times faster than and have the prediction quality on par with a standard cross-validated model. [*GitHub*](https://github.com/AlbMLpy/TN-FL-Model).

- **[Federated Privacy-Preserving Collaborative Filtering For On-Device Next App Prediction](https://link.springer.com/article/10.1007/s11257-024-09395-0)** - *UMUAI, The Journal of Personalization Research, 2024*

  In this study, we propose a novel SeqMF model to solve the problem of predicting the next app launch during mobile device usage. We modify the structure of the classical matrix factorization model and update the training procedure to sequential learning. Since the data about user experience are distributed among devices, the *federated learning setup* is used to train the proposed *sequential matrix factorization model*. One more ingredient of our approach is a new privacy mechanism that guarantees the protection of the sent data from the users to the remote server. To demonstrate the efficiency of the proposed model, we use publicly available mobile user behavior data. We compare our model with sequential rules and models based on the frequency of app launches. Our experiments show that the proposed model provides comparable quality with other methods different environments. 

- **[Dynamical Collaborative Filtering Recommender System](https://arxiv.org/abs/2312.10064)** - *Arxiv paper, 2023*  

  In production applications of recommender systems, a continuous data flow is used to update models in real-time. Many recommender models require complete retraining to adapt to new data. In this work, we introduce a novel collaborative filtering model for sequential problems, called the *Tucker Integrator* Recommender (TIRecA). TIRecA efficiently updates its parameters using only new data segments, allowing for the incremental addition of new users and items to the recommender system.
  To demonstrate the effectiveness of the proposed model, we conducted experiments on four publicly available datasets: MovieLens 20M, Amazon Beauty, Amazon Toys and Games, and Steam. Our comparison with general matrix- and tensor-based baselines, in terms of prediction quality and computational time, reveals that TIRecA achieves comparable prediction accuracy while being 10–20 times faster in training time. [*GitHub*](https://github.com/AlbMLpy/DynamicCF).

- **[MEKER: Memory Efficient Knowledge Embedding Representation for Link Prediction and Question Answering](https://aclanthology.org/2022.acl-srw.27/)** - *ACL, 2022* 

  *Knowledge Graphs (KGs)* are symbolically structured storages of facts. The KG embedding contains concise data used in NLP tasks requiring implicit information about the
  real world. Furthermore, the size of KGs that may be useful in actual NLP assignments is enormous, and creating embedding over it has memory cost issues. We represent KG
  as a 3rd-order binary tensor and move beyond the standard *CP decomposition* (Hitchcock, 1927) by using a data-specific generalized version of it (Hong et al., 2020). The
  generalization of the standard CP-ALS algorithm allows obtaining optimization gradients without a backpropagation mechanism. It reduces the memory needed in training while providing computational benefits. We propose a MEKER, a memory-efficient KG embedding model, which yields SOTA-comparable performance on link prediction tasks and KG-based Question Answering. [*GitHub*]( https://github.com/AlbMLpy/meker).

For a complete list of my publications, visit my [*Google Scholar profile*](https://scholar.google.ru/citations?user=k3t9iugAAAAJ&hl=en).
