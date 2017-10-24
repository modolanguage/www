![Modo Language Web Site Public Repository](README.png "Modo Language Web Site Public Repository")

# Modo Language Web Site

**Modo** is an easy-to-use modeling language which is used for modeling systems, their subsystems, super systems (the system that encompasses the system that is in focus) and environment. The simple syntax of Modo allows easy modeling for not only the IT professionals but also for the professionals from non-IT fields. The well-structured and machine-readable nature of Modo also allows direct conversion of the models to different programming languages and technologies, thus serving as a technology independent modeling method. 

For further information, please visit http://modolanguage.org.

This repository contains Modo Language **Web Site** source code.

## Brief History

A significant part of software development can be described as an effort of modeling real-life systems, using the computer systems. Computer systems, which are more static, have structured (explicitly definite) or semi-structured nature. On the other hand real-life systems, which are more dynamic, can be structured, semi-structured or most of the time, unstructured.

In the year 2005, a concept for software development was proposed by Aykut Aydınlı to be used for the projects of Sanpark. The main idea of this concept was to isolate the analysis and the design of real-life systems from the boundaries of computer systems. With the help of this isolated analysis, the idle effort of modeling an unstructured real-life system into a computer system is avoided and the resulting computer system serves as a complete solution. Ensuring the computer system is designed for the real-life system; not vice-versa.

The isolated analysis needs a method to model and define the real-life system. First real-life system definition was made using XML in the late 2005. This definition enabled isolated analysis of real-life systems, automated conversion to existing technologies, and initiated real-life system versioning. This first definition syntax was used by Sanpark for two years.

In late 2007, after observing the short-comings of the previous syntax a new language, which does not use the XML syntax anymore, has been constructed for system definition and semantic representation. And there the Modo language was born. There were two main reasons for abandoning the XML syntax:

1. XML syntax is not easily readable/writable for non-IT professionals and
2. XML is not sufficient to declare systems' different conditions, modes and states for different time frames and/or conditions.

Modo's latest shape was given and the language specification was finalized by Aykut Aydınlı and Doruk Eker in June, 2009.

## The Name Modo

The word "modo" means "mode" in Esperanto language. Esperanto language is a constructed (artificial) language. It is constructed to narrow the gap between people speaking different languages, having different cultures and having different beliefs.

Similarly Modo language is constructed to narrow the gap between people from different disciplines, different technical expertise and different viewpoints. 

## The Zero Defect Software

From a certain point of view, a software which is not serving the needs of the user can be considered as defected. This can be caused by one or both reasons listed below:

1. There are coding errors (bugs) within the code of the software.
2. The real-life system/problem related to the software was poorly or never analyzed, therefore the resulting computer system fails to serve the real-life system.

One should overcome the above issues to get closer to the zero-defect software phenomenon.

The first type of errors are the runtime errors, namely the bugs in the software. At every line of code developed, there is a certain probability of having something wrong. Therefore as the number of lines of code developed for a project/software increases, the probability of having an error also increases. Reducing the number of lines of code developed specifically for a software project reduces the number of errors. Code generators enable the reduction in number of lines of code. Once the initial bugs in the generator are fixed, in unit time the generated code becomes bug-free.

Modo is designed to be well-structured and machine readable, and therefore it is possible to use generators to convert Modo models to different languages. With the help of this feature Modo addresses the runtime errors.

The second type of errors is the design-time errors which are basically the errors that occur when analyzing the systems. The quality of the system analysis is directly related with the experience of the analyzer. However, even for the inexperienced analyzer, the design-time errors can be fixed with trial and error. The trial and error method can only be efficient if the time needed for each trial is affordable. The simple syntax of Modo combined with the rapid code generation, decreases the time needed to try different scenarios. Therefore enabling the trial and error process and addressing also the design-time errors.

## Contributing

Please use the [issue tracker](https://github.com/modolanguage/www/issues) to report any bugs/typos or requests.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/modolanguage/www/tags). 

## Authors

* **Aykut Aydınlı** - [@aykutaydinli](https://github.com/aykutaydinli)
* **Doruk Eker** - [@dorukeker](https://github.com/dorukeker)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
