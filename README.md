# Rootedjs

## Work-in-progress

### _Stemmed from [https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/tree/master/src/components/Tree](https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/tree/master/src/components/Tree)_

#### Concepts and Methodologies

This will be the first step of a plan to use individual and/or shared micro [Express.js](https://expressjs.com) server instances to preserve and maintain highly-functional framework-independent frontend code! **Step 1:** Refactor the [`getTreeNodeWithId`](https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/blob/master/src/components/Tree/Tree.tsx#L96) function to an Express server. The [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) methods within the [`getParentOfTreeNodeWithId`](https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/blob/master/src/components/Tree/Tree.tsx#L181) function will need to run in the client. This function will make server requests where it currently invokes `getTreeNodeWithId()` and the client will receive the returned value as a payload.

Then document evidence of runtime performance profiling metrics comparing the server approach to the full client-side function execution, just to fulfill curiosity. 🤔

The next stage in this experiment will be to request all kinds of serialized functional code and classes from Express severs for client-side invocation wherein frontend components will initialize namespaces for function and data dependencies and will request code only when corresponding namespaces are reached. The namespaces will be shared across the framework's component tree by utilizing a [single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth), [TypeScript](https://www.typescriptlang.org) object function store. This can be a custom implementation or it can leverage methods and dependencies specific to the framework. Writing descriptively accurate namespaces will be encouraged.

Estimated probabilities of the client needing to invoke methods one time and any future times during a [session](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session) can be predictively calculated with an AI/ML algorithm based on function invocation activity previously ascertained from the session (for opted-in users) and the cumulative insights collected for functional code use metrics within the application. These probability number calculations can be used as weights to randomly generate one-off `boolean` values used for build time decisions and runtime decisions to either keep requested code in memory or request code again only if/when a corresponding namespace gets called to execute.

Probabilities will be sourced from the TypeScript object function store which will receive scheduled evaluations for probability value updates with [node:fs](https://nodejs.org/api/fs.html) or [Python](https://www.python.org) scripting in conjunction with automated insight snapshots for collective usage statistics for functional code within the application (and not connected to specific user data). Namespaces will be stored as keys, each pointing to an object with a probability `number` value and a source `string` value which can interpolate environment variables to construct the URL for the corresponding endpoint on the Express server. Namespaces can follow an architectural naming convention linking functions to corresponding endpoints on the servers; [`fs.watch`](https://nodejs.org/api/fs.html#fswatchfilename-options-listener) can be used to subscribe to function store updates and execute a script to automatically generate matching server routes and endpoint strings for all namespaces. Invocation probabilities for individual namespaces can be optimized further by partitioning into sub-values if it would be programmatically advantageous. The [`fs.readdir`](https://nodejs.org/api/fs.html#fsreaddirpath-options-callback) callback can be used to write a script to perform [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations in a database where files containing the functional code within a directory can be synchronized with a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) to consolidate the code one more layer deep to enable any [Node.js](https://nodejs.org/en/) framework to work with the same functional frontend code. 

An interface resource for the API documentation can have a search feature where developers can type (in any language) a phrase that they expect to correlate with functionality that they want to locate. Results can display in order of confidence level and the developer can copy either the endpoint or the functional code in its entirety. All functions can have an array of tag strings that will be indexed to form the matches. Developers will be encouraged to write-in as many potential matches as possible to reduce the probability of a developer rewriting functionality that already exists within the company's resources. 

This search feature can be optimized with AI/ML as well. A script can automate a run schedule to algorithmically scour a company's entire structure of codebases and file system directories to intelligibly look for duplicate functionality and either pull or ticket suggested optimizations, thus eliminating expectations for developers to refrain from coincidentally duplicating existing functionality. As refactoring optimizations are detected, the algorithms can use [web hooks](https://www.geeksforgeeks.org/what-is-a-webhook-and-how-to-use-it/) to automate issue/ticket/story creation within the company’s [Agile Project Management](https://en.wikipedia.org/wiki/Agile_management) system for discoveries advising manual fix and/or team consensus. Developers will be encouraged to duplicate existing functionality because it will enable the algorithms to catch functional repetition as expected and contribute to confidence score accuracy. Automated file changes and pull requests can be initiated according to configurable confidence thresholds. Data from development team implementions of the manual and automated changes posted to their agile system from the automated web hooks can contribute to the predictive modeling for improving automated refactoring accuracy within a company's resources to match their dev ops habits. Metrics for any other obtainable API data from company/team activity in agile software can be posted to the models consistently or in scheduled configurable batch inputs based on development team preferences for machine learning refactoring intervention. API obtainable data from a team's entire previous agile activity can be used to form a baseline refactoring automation protocol upon initiating the machine learning mechanisms for building upon the existing conclusions to discover how the team interacts with refactoring automation. These AI/ML features will help with consolidating code into root functions kept in the company's REST API and defined with namespaces in frontend frameworks and Node.js proxy frameworks with a "single source of truth" typescript object function store reflecting the company's function database.

One single TypeScript function will be usable in unlimited apps and unlimited sessions within those apps without bootstrapping duplicate lines of existing code as companies build more products. This is an alternate reusable code strategy to deploying node modules. It will help with maintaining minimal dependency counts and minimizing the need for individual frontend applications to update dependencies to be able to receive the latest versions of resources.

Notwithstanding potential computational performance gains and their potentially implied monetary savings which are not assumed until proven, this will be an incredibly resourceful decision for constructing a groundwork to help optimize software development productivity and enable extraordinarily logical architectural efficiency for high-level code across all company products!

If a performance compromise occurs in any client instance, a human user would not experience a noticeable difference and the developer satisfaction that will be achieved will make the endeavor and continued maintenance worthwhile. There is always the flexibility to duplicate and write server-side code on the frontend in a hardcoded fashion as needed, since JavaScript or TypeScript will be used uniformly (based on development team compiling preferences and hopefully with leveraging [JSDoc](https://jsdoc.app) when using JavaScript).

An example scenario of reusable code practicality is #56. When multiple child elements within an insatiable React component need dynamically scalable `id` attributes constructed through a method to inject a provided `id` prop into base strings and also ensure that the document has no duplicates of the `id` attributes being rendered, a developer may choose from several options to implement a solution. One option is to write a method within the component where the code is needed. Theoretically, an `export`/`import` statement could be used to share the code with other components in the app. A more practical option is to use a centralized resource within the app in which components can import the function from a file in the codebase; or even better, a root component can be provided with a container similar to [Redux](https://redux.js.org/) in which case all components sharing the wrapped component as a common ancestor will have access. What if the company wants to build more apps without rewriting code that may already exist somewhere within the company's products? A developer can deploy the function as a node module and import it into all apps! What if the company does not want to rely on manual or automated methods to update node modules within an app when the package's source code is updated, and what if the company wants to reduce dependency counts and reduce the need to keep track of using or not using a dependency when changes are made to its source code? The Express server approach is the key! A company can maintain a server resource with one function to be used in all application instances needing to dynamically update all component child element `id` attributes. The server can contain just this one function or many different functions. The option exists to `GET` the functional code in its entirety and execute the method on the client side, and there is also an option to send parameters within the `GET` request and receive only the necessary returned data. The request parameters could discern which option to use. This eliminates the need to update `import` statements within an app when files are moved to different directories (even though [VSCode](https://code.visualstudio.com) does that automatically) or even to care about whether or not the code is available in the app currently being worked on. It reduces the relevance of the root repository in which the developer is working. A pre-commit hook can be automated to locate and run all tests in all apps that depend on updated code and can require all corresponding tests to pass before commits can be merged with or pushed to the server repository. One company could have subsidiary companies that all share code. Companies could license endpoints to other companies. A developer could maintain their own server(s) for tested reusable frontend code to source from when writing code directly in a company's codebase if the company does not maintain reusable code across their applications. Keeping a variety of boilerplate servers and [resources](https://github.com/microsoft/TypeScript-Node-Starter) accessible can be helpful for starting projects on-demand.

Companies will not need to be concerned about migrating code to stay current with modern frontend framework technologies and adapt as new technologies become available to better serve the needs of a product because the majority of frontend application code will be deployed as server-side resources capable of being used in any frontend framework. Before developing a project, less emphasis can be placed on analyzing all frontend framework options to identify the technology that seems like the best choice to withstand the longevity of the application. Pressure will be eased for predicting unforeseen circumstances that may influence technology decisions. Decisions can be based more on production data comparisons and less on the perspectives of the individuals in a company designated to authorize which framework technology will best serve the company in the future, and whether or not that technology choice will stand up to future technologies that do not exist yet. Personal preferences for familiar technologies will have less weight on decision making and developers can continue to grow their skillets. Burdens will be lessened for teams hesitant to try new technologies. Discussions about cost implications of using new technologies - like pondering whether or not a [React](https://reactjs.org) savvy team wants to learn [Svelte](https://svelte.dev) based on assumptions that they will be stuck with that decision and it would be difficult to migrate the code later - can be minimized. Developers and maintainers of emerging framework technologies will be able to get great feedback for use cases, and reasons for choosing when to logically start a development project with one specific framework without utilizing this comparison approach will become more accurately identifiable. Financial budgeting for potential future redevelopment and refactoring will be eliminated!

Different versions of a single frontend application can be maintained until a decision is made to commit to one specific framework. [A/B testing](https://en.m.wikipedia.org/wiki/A/B_testing) for trying different frameworks in production will be useful. A fallback version of an application can be deployed if a production bug in one framework version impedes usability while another version is stable. One test runner can serve all frameworks. [Test-driven development](https://en.m.wikipedia.org/wiki/Test-driven_development) (TDD) can be used to onboard new technologies. The test runner can be programmed to have 100% coverage for DOM paint and state combinations, based on automated and/or manual application flow recordings. This feature can be achieved with an existing test runner dependency in its entirety if one is available. If one is not available, it can be built with a DOM traversal function. Developers can compare cost metrics of executing the tests in a client verses a server. It will always be a nice challenge to get new frameworks to pass all tests!

This entire methodology is intended to afford development teams time and money savings for greenfield development by enabling frontend framework decisions to be made later in the application lifecycle after the frontend code is developed, and it is not devised as a suggested method of code migration and refactoring for existing applications. It could be used supplementally when migrating existing code, presumably by employing a TDD-oriented approach. This approach is not intended to replace rapid development used to start a project from scratch and would be best valued as a second (TDD) iteration after a proof-of-concept prototype exists to make users and stakeholders happy!

**Next steps:** Determine how to differentiate when to execute functional code in an Express server application verses when to send the code to the client from the server in a `GET` request for client-side execution. Determine how to use this system offline in a [Progressive Web App](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/); the client needs to receive a cache of the Express servers from the most recent time when a connection was established. Determine how to choose when to partition frontend code into separate Express servers and when to partition code into separate routes within one server. Determine when to request functional code from a database from an Express server. Determine strategies for leveraging [stateless sessions](https://en.wikipedia.org/wiki/Session_(computer_science)#Web_server_session_management) and [cookie](https://en.wikipedia.org/wiki/HTTP_cookie) parsing with [Express cookie-parser middleware](https://expressjs.com/en/resources/middleware/cookie-parser.html) to manage functional code with Express servers sourcing functional code from REST APIs (and with experimentation of functionally-probabilistic methodologies for client-side optimization). Use [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to automate server-to-client payloads with [socket.io](https://socket.io) and a [Process manager](https://expressjs.com/en/advanced/pm.html) such as [PM2](https://pm2.keymetrics.io/) while listening for database updates. Document use cases for other Node.js micro server frameworks. Document various options for implementing [Web Components](https://www.webcomponents.org).

For companies wanting to rely more on human capabilities and less on programmatic optimization, web hooks for version control and agile systems can scrape code to provide stakeholders and non-technical leadership with translated insights for discovering restructuring opportunities as their teams approve pull requests for functionality already existing within the company's products. This will serve as an insurance mechanism to give peace of mind to non-programmers in knowing that they will not pay for the same work to be done multiple times. Developer code habits can be monitored for triggering SMS, email, in-app and push notifications to alert stakeholders when a project needs support in an skill area where one developer has demonstrated technological proficiency through previously contributed code. Web hooks for version control and agile systems can be synchronized with educational content from resources such as freeCodeCamp, MDN Web Docs and technology-specific documentation, or commercial products such as Pluralsight. Developers can recieve notifications with with skillset growth resources based on opportunities identified through code scraping. One algorithm could scrub a surplus of educational content and tutorials from a broad spectrum of configurable sources for engineering leadership to sift through periodically to filter a content pool available to provide to their team. Developers can manually add search result tags and feedback to the entire selection of resources through parameter selections to help solidify machine learning algorithms working to provide their company and individual contributors with preferentially catalogued resource libraries. Insight visualizations can furnish company leadership with efficiency scores demonstrating how optimally their source code leverages their technologies compared to potentials achieved with the same technologies in public leaderboard software in the present day. Some metrics that can be watched within individual sessions or any number of device sessions in a specified duration are; data served verses data used, data re-requested verses data stored in memory, client-side function invocation where server-side execution could reduce technology spending through a variety of suggested methods to try based on the results, utilization of basic verses advanced features of the technologies, development environment build and compilation speeds, total number of sessions activated per user within specified durations, upgrade and migration opportunities, agility, and so on. Developers could use the tool to convey their own discoveries of impediments to stakeholders. For companies not wanting to make decisions immediately, understanding a transparent unbiased perspective of how software application assets rank functionally in comparison to that which is functionally attainable is an important metric that companies ought to want to be informed about, and not even necessarily for sales purposes; more so for ownership and self diligence. A volunteer/community-maintained public open-source leaderboard using variably resizable and replaceable data inputs available for any company to compare application insight metrics with and which could tether efficiency scoring criteria to evidently successful use cases optionally verifiable by maintainers and developers of the comparable technologies and frameworks would be a remarkably resourceful method for defining unbiased quantification and securing maintainability confidence by revealing nonconforming programming trends early for supporting informed development decisions and enabling stakehodlers to confidingly achieve productive engineering practices returns on their investments.

**Conclusion:** This system is intended to optimize any technology with an internet connection and primarily web/mobile frontend software. It details practical methods for leveraging Node.js as a server-side resource in which all communicating applications can be programmed with any backend technology in existence (e.g. Rails, Go, Java, etc). The objectives are to reduce costs for software companies, preserve code value, ensure technological sustainability, increase decision-making confidence, incorporate testing uniformity, maximize quality assurance, streamline multi-app code sharing, and for a session to only know about code that it will use; with the presumption that one application could have an abundance of possible combinations of unnecessary management of functional code and data for individual sessions.

_This project will not turn into a framework and it will always be a resource for developers to use for programming their own custom frontend server frameworks (and as package modules). Continuously-developing boilerplate server framework examples will always be available to deploy and use in their entirety. This project will always be open-source and it will always use Node.js as the only backend programming language while always being integrable with all backend technologies._

**@author [Matt Fagan](https://github.com/matt-development-work/)**

---

#### TODO

- [x] Start a new repository with an Express TypeScript server.
- [ ] Add [Hot Module Replacement](https://webpack.js.org/guides/hot-module-replacement/#via-the-nodejs-api)
- [ ] Bootstrap a [Vite](https://vitejs.dev) project with [Tailwind CSS](https://tailwindcss.com), TypeScript and [Testing Library](https://testing-library.com) within the repository and omit it from the build.
- [ ] Add the [`Tree.tsx`](https://github.com/matt-development-work/React.js-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/blob/master/src/components/Tree/Tree.tsx) component code as a React component.
- [ ] Refactor the `root` data object and the `getTreeNodeWithId` function to the Express server and create endpoints for both.
- [ ] Document evidence of runtime performance profiling metrics comparing the server approach to full client-side function execution just to fulfill curiosity. 🤔
- [ ] Use request parameters to discern when to `GET` the functional code in its entirety and run the method on the client side, verses when to send parameters within the `GET` request, run the method on the server and respond with only the returned data.
- [ ] Attach a callback parameter to a fetch requesting functional code to evaluate on the server and pass the returned value through the callback before issuing the response.
- [ ] Start developing a "single source of truth" TypeScript object function store.
- [ ] Refactor as much code as possible from the `Tree.tsx` component to the Express server.
- [ ] Use the Express server to reproduce the exact same Tree UI component in Svelte, Expo, Remix, Astro, Ember, Vue, Next, React Native, etc.
- [ ] Determine how to share the TypeScript object function store in all frontend frameworks.
- [ ] Develop a test runner to validate DOM reproduction accuracy across frontend frameworks. See if a DOM paint testing dependency exists.
- [ ] Document various options for leveraging [Web Components](https://www.webcomponents.org).
