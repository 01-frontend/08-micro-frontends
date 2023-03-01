## I. What is Micro-frontends

---

## II. Benefits of Micro-frontends

1. Team Scalability

Each team will take care a `separated child MFE`, `self codebase management`, `self git management` and `self deployment`. Thus, micro-frontends can help to `avoid code conflict` when having too much people on a repo

2. Reusability

Conceptually, a child MFE is similar to a Component that can be reused 2 or more times at any places on the application

3. Unlimited on Technical

The base app just consume the Vanilla JS code. That means, some of child MFE can be developed with ReactJS while others can be developed by VueJS or AngularJS

---

## III. Trade offs of Micro-frontends

1. Complexity

The complexity in setup and run base app with all child MFEs, how to manage data communication and stylesheets

On the other hand, all child MFEs are separated so it isn't easy to follow a common standard such as libraries, data fetching, project structure...in entire child MFEs

2.
