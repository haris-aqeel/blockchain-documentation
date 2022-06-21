---
title: "Version Pragma"
metaTitle: "Pragmas are directives to the compiler about how to handle the code"
metaDescription: "Pragmas are directives to the compiler about how to handle the code"
---

The following is a code block with Solidity language syntax highlighting defining the pragma statement.

## Pragma

Pragma is a keyword used in Solidity for defining the version which is used to compile Solidity. 
- Pragmas are directives to the compiler about how to handle the code. 
- Every line of solidity source code should begin with a "version pragma," which specifies which version of the solidity compiler to use.
- This prevents the code from being incompatible with future compiler versions that may introduce changes.

---

There are two ways of defining the pragma version.


- ### Specify Exact Version
```solidity
pragma solidity^0.8.0;
```

The above statement means that 0.8.0 version of Solidity will be used.

- ### Specify Range Of Versions

```solidity
pragma solidity >=0.7.0;
```
The above statement means all versions from 0.7.0 and above will be included.


```solidity
pragma solidity >=0.6.0 <0.7.0;
```
The above statement means all versions greater than 0.6.0 will be included apart from 0.7.0 version. This means that the code will run on 0.6.0, 0.8.0 and above.



