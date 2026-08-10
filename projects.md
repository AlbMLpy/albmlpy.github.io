---
layout: page
title: Projects
permalink: /projects/
---

Selected projects are listed below. For a full list, see my [GitHub profile](https://github.com/AlbMLpy).

{% include paper.html
title="tnkm: A JAX Framework for Tensor Network Kernel Machines"
meta="JAX · Software · Python · Machine Learning · System Identification · Low-Rank Approximation · Kernel Methods"
paper_url="https://arxiv.org/abs/2608.07043"
code_url="https://github.com/AlbMLpy/tnkm"
title_url="https://github.com/AlbMLpy/tnkm"
summary="**tnkm** is a [JAX](https://github.com/jax-ml/jax)-based library for machine learning with tensor-network parameterizations.
It combines kernel methods with low-rank tensor decompositions to build scalable models with explicit rank control.
**tnkm** is intended for research in machine learning, system identification, and time-series modeling. 

### Features

- *CP and TT tensor-network kernel machines*
- *Polynomial*, *Fourier*, *B-spline* and other feature maps
- *Alternating Least Squares (ALS)* and *gradient-based optimization* ([Optax](https://github.com/google-deepmind/optax))
- *Explicit rank control* for balancing model complexity and expressiveness
- *JAX-native implementation* with JIT compilation and hardware acceleration
"
docs_url="https://albmlpy.github.io/tnkm"
pypi_url="https://pypi.org/project/tnkm/"
doi="https://doi.org/10.5281/zenodo.21841905"
icon="/images/tnkm_logo.png"
%}
