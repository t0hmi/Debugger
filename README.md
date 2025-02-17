## Introduction

Model-Driven Development (MDD) is a development process that revolves around the use of models as central artifacts to represent and reflect on various aspects of a system. In the context of MDD, behavioral models are crucial, often written using Domain-Specific Languages (DSLs) to express the potential behaviors of the system under development.

Interactive debuggers play a vital role in the MDD process, providing developers with valuable tools to understand and troubleshoot behavioral models. However, only a few DSLs have dedicated interactive debuggers. [Enet et al.](https://hal.science/hal-04124727v1/file/main.pdf) propose a novel approach to address this gap.

This project goal is to provide an additional DSL to further evaluate the approach proposed.

## Getting Started

1. Clone the repository

```bash
    git clone https://github.com/t0hmi/Debugger.git
```

2. Install dependencies in all projects

```bash
    npm install
```

4. Generate DSL file

```
    cd runtime/langium-dsl
    npm run langium:generate
```

4. Build all projects

```bash
    npm run build
```

## Debug

1. Launch Runtime from "Run & Debug"
2. Launch Configurable Debugger from "Run & Debug"
3. Launch Configurable Debug Extension from "Run & Debug"
4. In the new window, select the file to debug and run the debugger from "Run & Debug"
