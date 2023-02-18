# Rootedjs

## _Thrifty TypeScript_

### _Sprouted from [https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/tree/master/src/components/Tree](https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/tree/master/src/components/Tree)_

#### Concepts and Methodologies

This will be the first step of a plan to use database clusters and micro [Express.js](https://expressjs.com) server instances for [Stateless protocol](https://en.m.wikipedia.org/wiki/Stateless_protocol) and [Code splitting](https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting) to preserve and maintain framework-agnostic functional frontend code!

**Step 1:** Refactor the [`getTreeNodeWithId`](https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/blob/master/src/components/Tree/Tree.tsx#L96) function to an Express server. The [Document](https://developer.mozilla.org/en-US/docs/Web/API/Document) methods within the [`getParentOfTreeNodeWithId`](https://github.com/matt-development-work/React-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/blob/master/src/components/Tree/Tree.tsx#L181) function will need to run in the client. This function will make server requests where it currently invokes `getTreeNodeWithId()` and the client will receive the returned value as a payload.

The next step in this experiment will be to request all kinds of serialized functional code and classes from Express severs for client-side invocation wherein frontend components will initialize namespaces for function and data dependencies and will request code only when corresponding namespaces are reached. The namespaces will be shared across the framework's component tree by utilizing a [single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth), [TypeScript](https://www.typescriptlang.org) object function store. This can be a custom implementation or it can leverage methods and dependencies specific to the framework. Writing descriptively accurate namespaces will be encouraged.

Estimated probabilities of the client needing to invoke methods one time and any future times during a [session](https://developer.mozilla.org/en-US/docs/Web/HTTP/Session) can be predictively calculated with an AI/ML algorithm based on function invocation activity previously ascertained from the session (for opted-in users) and the cumulative insights collected for functional code use metrics within the application. These probability number calculations can be used as weights to randomly generate one-off `boolean` values used for build time decisions and runtime decisions to either keep requested code in memory or use [Tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) and request code again only as corresponding namespaces get called to execute.

Probabilities will be sourced from the TypeScript object function store which will receive scheduled evaluations for probability value updates with [node:fs](https://nodejs.org/api/fs.html) or [Python](https://www.python.org) scripting in conjunction with automated insight snapshots for collective usage statistics for functional code within the application (and not connected to specific user data). Namespaces will be stored as keys, each pointing to an object with a probability `number` value and a source `string` value which can interpolate environment variables to construct the URL for the corresponding endpoint on the Express server. Namespaces can follow an architectural naming convention linking functions to corresponding endpoints on the servers; [`fs.watch`](https://nodejs.org/api/fs.html#fswatchfilename-options-listener) can be used to subscribe to function store updates and execute a script to automatically generate matching server routes and endpoint strings for all namespaces. Invocation probabilities for individual namespaces can be optimized further by partitioning into sub-values if it would be programmatically advantageous. The [`fs.readdir`](https://nodejs.org/api/fs.html#fsreaddirpath-options-callback) callback can be used to write a script to perform [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) operations in a database where files containing the functional code within a directory can be synchronized with a [REST API](https://en.wikipedia.org/wiki/Representational_state_transfer) to consolidate the code one more level deep to enable any [Node.js](https://nodejs.org/en/) framework to serve the same modular high-level application TypeScript code.

An API docs GUI can have a search component enabling developers to type (in any language) phrases expected to correspond to desired functionality. Developers can copy endpoints and functions to [Clipboard](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard) from lists of results ordered by match confidence level. All results can have an array of tag strings indexed to identify matches to display. Developers will be encouraged to write-in as many potential matches as possible to reduce the likelihood of developers rewriting functionality existing within the company's resources.

This search feature can be optimized with AI/ML as well. A script can automate a run schedule to algorithmically scour a company's entire structure of codebases and file system directories to intelligibly look for duplicate functionality and either pull or ticket suggested optimizations, thus eliminating expectations for developers to refrain from coincidentally duplicating existing functionality. As refactoring optimizations are detected, the algorithms can use [webhooks](https://www.geeksforgeeks.org/what-is-a-webhook-and-how-to-use-it/) to automate issue/ticket/story creation within the company’s [Agile Project Management](https://en.wikipedia.org/wiki/Agile_management) system for discoveries advising manual fix and/or team consensus. Developers will be encouraged to duplicate existing functionality because it will enable the algorithms to catch functional repetition as expected and contribute to confidence score accuracy. Automated file changes and pull requests can be initiated according to configurable confidence thresholds. Data from development team agile activity based on the automated tickets and pull requests can contribute to the predictive modeling for improving automated refactoring accuracy within a company's resources to match their dev ops habits. Metrics for any other obtainable API data from company/team activity in agile software can be posted to the models consistently or in scheduled configurable batch inputs based on development team preferences for machine learning refactoring intervention. API obtainable data from a team's entire previous agile activity can be used to form a baseline refactoring automation protocol upon initiating the machine learning mechanisms for building upon the existing conclusions to discover how the team interacts with refactoring automation. These AI/ML features will help with consolidating code into root functions kept in the company's REST API and defined with namespaces in frontend frameworks and Node.js proxy frameworks with a "single source of truth" typescript object function store reflecting the company's function database.

One single TypeScript function will be usable in unlimited applications and sessions; unlimited server session instances for stateless frontend applications within unlimited options of Node.js frameworks, and unlimited stateful or stateless client session instances within unlimited options of frontend frameworks. The only requirements are for the [origin](https://developer.mozilla.org/en-US/docs/Glossary/Origin) of a requesting client application to be capable of accessing a server and recieving response payloads, which can be configured on a per-application basis with [CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS) via [Express cors middleware](https://expressjs.com/en/resources/middleware/cors.html). Optionally, an Express server can be constructed as "read-only" by configuring [`Access-Control-Allow-Methods`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) to require [Preflight request](https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request) validation of a `GET` method. This is an alternate reusable code strategy to deploying node modules. It will help with maintaining minimal dependency counts and minimizing the need for individual frontend applications to update dependencies to be able to receive the latest versions of resources. Companies can deploy micro TypeScript servers as private node modules accepting parameters to make configurations such as connecting to databases serving as frontend application high-level functional code banks.

Notwithstanding potential computational performance gains and their potentially implied monetary savings which are not assumed until proven, this will be an incredibly resourceful decision for optimizing software development productivity and enabling extraordinarily logical frontend architectural efficiency across all company products!

If a performance compromise occurs in any client instance, a human user would not experience a noticeable difference and the developer satisfaction that will be achieved will make the endeavor and continued maintenance worthwhile. There is always the flexibility to duplicate and write server-side code on the frontend in a hardcoded fashion as needed, since JavaScript or TypeScript will be used uniformly (based on development team compiling preferences and hopefully with leveraging [JSDoc](https://jsdoc.app) to write makeshift types as comments when using JavaScript). Companies can use standardizations and automation for development environment internal tools to ensure developers can access their team's preferred IDE configurations including [JavaScript type checking with JSDoc in VSCode](https://code.visualstudio.com/Docs/languages/javascript#_jsdoc-support).

An example scenario of reusable code practicality is #56. When multiple child elements within an insatiable React component need dynamically scalable `id` attributes constructed through a method to inject a provided `id` prop into base strings and also ensure that the document has no duplicates of the `id` attributes being rendered, a developer may choose from several options to implement a solution. One option is to write a method within the component where the code is needed. An `export`/`import` statement could be used to share the code with other components in the app. A more practical option is to use a designated file within the codebase from which all components can import reusable methods; or even better, a root component can be provided with a container similar to [Redux](https://redux.js.org/) in which case all components sharing the wrapped component as a common ancestor will have access. If the company wants to build more apps without rewriting code that may already exist somewhere within the company's products, a developer can deploy the function as a node module and import it into all apps. If the company does not want to rely on manual or automated methods to update node modules within an app when the package's source code is updated, and if the company wants to reduce dependency counts and reduce the need to keep track of using or not using a dependency when changes are made to its source code, the Express server approach is the key! A company can maintain a server resource to manage one declaration of this function to be used in all application instances needing to dynamically update all component child element `id` attributes. The server could contain just this one function or many different functions. The option exists to `GET` the functional code in its entirety and execute the method on the client side, and there is also an option to send parameters within the `GET` request and receive only the necessary returned data. The request parameters could discern which option to use. The function could either be defined as code within the server, or the request parameters could indicate a variable pointing to an endpoint URL string accessible only from the server and then used to fetch the functional code from a database. This eliminates the need to update `import` statements within an app when files are moved to different directories (even though [VSCode](https://code.visualstudio.com) does that automatically) or even to care about whether or not the code is available in the app currently being worked on. It reduces the relevance of the root repository in which the developer is working. A pre-commit hook can be automated to locate and run all tests in all apps that depend on updated code and can require all corresponding tests to pass before commits can be merged with or pushed to the server repository. One company could have subsidiary companies all sharing code. Companies could license endpoints to other companies. Developers could maintain their own servers with tested reusable frontend code to source from when writing in a company's codebase if the company does not maintain reusable code across their applications. Keeping [resources](https://github.com/microsoft/TypeScript-Node-Starter) and boilerplate servers handy can be helpful for starting projects on-demand.

Companies will not need to be concerned about migrating code to stay current with modern frontend framework technologies and adapt as new technologies become available to better serve the needs of a product because the majority of frontend application code will be deployed as server-side resources capable of being used in any frontend framework. Before developing a project, less emphasis can be placed on analyzing all frontend framework options to identify the technology that seems like the best choice to withstand the longevity of the application. Pressure will be eased for predicting unforeseen circumstances that may influence technology decisions. Decisions can be based more on production data comparisons and less on the perspectives of the individuals in a company designated to authorize which framework technology will best serve the company in the future, and whether or not that technology choice will stand up to future technologies that do not exist yet. Personal preferences for familiar technologies will have less weight on decision making and developers can continue to grow their skillets. Burdens will be lessened for teams hesitant to try new technologies. Discussions about cost implications of using new technologies - like pondering whether or not a [React](https://reactjs.org) savvy team wants to learn [Svelte](https://svelte.dev) based on assumptions that they will be stuck with that decision and it would be difficult to migrate the code later - can be minimized. Developers and maintainers of emerging framework technologies will be able to get great feedback for use cases, and reasons for choosing when to logically start a development project with one specific framework without utilizing this comparison approach will become more accurately identifiable. Financial budgeting for potential future redevelopment and refactoring will be eliminated!

Different frontend application versions can be maintained until a decision is made to commit to one framework. [A/B testing](https://en.m.wikipedia.org/wiki/A/B_testing) for trying different frameworks in production will be useful. A fallback version of an application can be deployed if a production bug in one framework version impedes usability while another version is stable. One test runner can serve all frameworks. [Test-driven development](https://en.m.wikipedia.org/wiki/Test-driven_development) (TDD) can be used to onboard new technologies. The test runner can be programmed to have 100% coverage for DOM paint and state combinations, based on automated and/or manual application flow recordings. This feature can be achieved with an existing DOM crawler testing dependency in its entirety if one is available. If one is not available, it can be built with a DOM traversal function and [Testing Library](https://testing-library.com/). Developers can compare cost metrics of executing the tests in a client verses a server. It will always be a nice challenge to get new frameworks to pass all tests!

This entire methodology is intended to afford development teams time and money savings for greenfield development by enabling frontend framework decisions to be made later in the application lifecycle after the frontend code is developed, and it is not devised as a suggested method of code migration and refactoring for existing applications. It could be used supplementally when migrating existing code, presumably by employing a TDD-oriented approach. This approach is not intended to replace rapid development used to start a project from scratch and would be best valued as a second (TDD) iteration after a proof-of-concept prototype exists to make users and stakeholders happy!

**Next steps:** Determine when to execute functional code in an Express server application verses when to send the code to the client from the server in a `GET` request for client-side execution. Determine how to use this system offline in a [Progressive Web App](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/); the client needs to receive a cache of the Express servers from the most recent time when a connection was established. Determine when to partition frontend code into separate Express servers verses partitioning code into separate routes within one Express server. Determine when to request functional code from a database from an Express server verses defining functions on an Express server. Retain session memory across two client application instances and unlimited client application instances, with [stateless sessions](<https://en.wikipedia.org/wiki/Session_(computer_science)#Web_server_session_management>) and [cookies](https://en.wikipedia.org/wiki/HTTP_cookie) by using [Express cookie-session middleware](https://expressjs.com/en/resources/middleware/cookie-session.html) to manage functional code with Express servers sourcing functional code from REST APIs (and with experimental opt-in functionally-probabilistic methodologies for client optimization). Use [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to automate server-to-client payloads with [socket.io](https://socket.io) and a [Process manager](https://expressjs.com/en/advanced/pm.html) such as [PM2](https://pm2.keymetrics.io/) while listening for database updates. Document use cases for other Node.js micro server frameworks. Document various options for implementing [Web Components](https://www.webcomponents.org).

For companies wanting to rely more on human capabilities and less on programmatic optimization, webhooks for version control and agile systems can scrape code to provide stakeholders and non-technical leadership with translated insights for discovering restructuring opportunities as their teams approve pull requests for functionality already existing within the company's products. This will serve as an insurance mechanism to give peace of mind to non-programmers in knowing that they will not pay for the same work to be done multiple times. Developer code habits can be monitored for triggering SMS, email, in-app and push notifications to alert stakeholders when a project needs support in an skill area where one developer has demonstrated technological proficiency through previously contributed code. Webhooks for version control and agile systems can be synchronized with educational content from resources such as freeCodeCamp, MDN Web Docs and technology-specific documentation, or commercial products such as Pluralsight. Developers can recieve notifications with with skillset growth resources based on opportunities identified through code scraping. One algorithm could scrub a surplus of educational content and tutorials from a broad spectrum of configurable sources for engineering leadership to sift through periodically to filter a content pool available to provide to their team. Developers can manually add search result tags and feedback to the entire selection of resources through parameter selections to help solidify machine learning algorithms working to provide their company and individual contributors with preferentially catalogued resource libraries. Insight visualizations can furnish company leadership with efficiency scores demonstrating how optimally their source code leverages their technologies compared to potentials achieved with the same technologies in public leaderboard software in the present day. Some metrics that can be watched within individual sessions or any number of device sessions in a specified duration are; data served verses data used, data re-requested verses data stored in memory, client-side function invocation where server-side execution could reduce technology spending through a variety of suggested methods to try based on the results, utilization of basic verses advanced features of the technologies, development environment build and compilation speeds, total number of stateful verses stateless sessions activated per user within specified durations, upgrade and migration opportunities, agility, and so on. Developers could use the tool to convey their own discoveries of impediments to stakeholders. For companies not wanting to make decisions immediately, understanding a transparent unbiased perspective of how software application assets rank functionally in comparison to that which is functionally attainable is an important metric that companies ought to want to be informed about. A volunteer/community-maintained public open-source leaderboard using variably resizable and replaceable data inputs available for any company to compare application insight metrics with and which could tether efficiency scoring criteria to evidently successful use cases optionally verifiable by maintainers and developers of the comparable technologies and frameworks would be a remarkably resourceful method for defining unbiased quantification and securing maintainability confidence by revealing nonconforming programming trends early for supporting informed development decisions and enabling stakehodlers to confidingly achieve productive engineering practices returns on their investments.

**Conclusion:** This system is intended to optimize any technology with an internet connection and particularly web/mobile/desktop stateful frontend software. It details methods for leveraging Node.js as a server-side resource in which all communicating applications can be programmed with any backend technology in existence (e.g. Rails, Go, Java, etc). The objectives are to reduce costs for software companies, preserve code value, ensure codebase sustainability, increase decision-making confidence, implement testing uniformity, maximize quality assurance, streamline multi-app code sharing, transparently inform stakeholders about programming needs, introduce magnificently practical machine learning concepts to elevate engineering productivity, and for a stateless client session to know only about code that it will use, with the presumption that a software application developed with illogical programming practices could have an abundance of possible combinations of unnecessary management of functional code and data in individual sessions.

**@author [Matt Fagan](https://github.com/matt-development-work/)**

_This project will not turn into a framework and it will always be a resource for developers to reference many possible combinations of methodologies to use for programming custom frontend optimization servers (and as package modules). This journal intentionally splurges concepts; some of which could be accomplished with existing or future dependencies. The objective here is to establish logic for high-level programming strategies, and not necessarily distribute software code for accomplishing strategies. This project will always be open-source with using Node.js as the only backend programming language while always being relevant to all backend technologies at least in a proxy server capacity._

_The primary message is to convey that frontend enginers can use Node.js server technologies to build custom framework-agnostic server-side rendering resources to replicate and extend capabilities of existing client framework server tools including [Next.js Pre-rendering](https://nextjs.org/docs/basic-features/pages#pre-rendering), [vite-plugin-ssr](https://vite-plugin-ssr.com/) and [Storybook's Server rendering](https://github.com/storybookjs/storybook/tree/main/app/server#server-rendering). We can take more control over our independently developed resources and always be a step ahead of framework technologies by sourcing their concepts and dependencies as-needed to continue developing our own server technologies to meet our own needs, while also contributing our new concept discoveries back to the frameworks we like and support._

_Rootedjs serves as a blog where I publish creative technical writing about cheap architecture theory and document evidence of my conceptualization capability. There is no implication that concepts represented here will develop into open-source code available within. This project is complete as-is, and it always has room for growth. All text documented in this repository is subject to the terms of the [MIT license](https://github.com/matt-development-work/Rootedjs/blob/master/LICENSE.md) as included._

---

#### TODO

- [x] Start a new repository with an Express TypeScript server.
- [ ] Document scalability and automation strategies for using [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html) and [Modules](https://www.typescriptlang.org/docs/handbook/modules.html) to dynamically import type expressions including [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), [Functions](https://www.typescriptlang.org/docs/handbook/2/functions.html), [Object Types](https://www.typescriptlang.org/docs/handbook/2/objects.html), etc. into Node.js server applications and frontend client applications to correspond with the serialized functional TypeScript code, since types cannot be object values and therefore must be stored in [Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html) in [packages](https://nodejs.org/api/packages.html) separate from the functional code databases in order to be available in unlimited different specified application origins as intended with the functional code. Include strategies for programmatically activating package updates with [`fs.read`](https://nodejs.org/api/fs.html#fsreadfd-buffer-offset-length-position-callback) when changes to types defined outside of `.d.ts` files are merged.
- [ ] Add [Webpack Hot Middleware](https://github.com/webpack-contrib/webpack-hot-middleware).
- [ ] Bootstrap a [Vite](https://vitejs.dev) project with [Tailwind CSS](https://tailwindcss.com), TypeScript and [Testing Library](https://testing-library.com).
- [ ] Add the [`Tree.tsx`](https://github.com/matt-development-work/React.js-TypeScript-UI-Component-Library-Sample-with-Testing-and-A11y/blob/master/src/components/Tree/Tree.tsx) component code as a React component.
- [ ] Refactor the `root` data object and the `getTreeNodeWithId` function to the Express server and create endpoints for both.
- [ ] Record runtime performance profiling metrics comparing the server approach to full client-side function execution, just to fulfill curiosity.
- [ ] Use request parameters to discern when to `GET` the functional code in its entirety and run the method on the client side, verses when to send parameters within the `GET` request, run the method on the server and respond with only the returned data.
- [ ] Attach a callback parameter to a fetch requesting functional code to evaluate on the server and pass the returned value through the callback before issuing the response.
- [ ] Add all namespaces for functional code to a "single source of truth" TypeScript object function store.
- [ ] Refactor as much code as possible from the `Tree.tsx` component to the Express server as framework-agnostic TypeScript.
- [ ] Program a test runner to validate DOM reproduction accuracy.
- [ ] Use the Express server to replicate Tree UI component with many different client-side technologies including Svelte, Expo, Remix, Astro, 11ty, Ember, Vue, Next, React Native, JQuery, etc.
- [ ] Consolidate functional code from the Express server into a [MongoDB Atlas Cluster](https://www.mongodb.com/docs/atlas/).
- [ ] Replicate the functionality of the Express server with many different Node.js server technologies including Fastify, Koa.js, hapi.js, nestjs, etc.
- [ ] Update the test runner as-needed to ensure inclusivity of all server-to-client combinations of implemented client technologies and server technologies.
- [ ] Continue planning the concept for the reusable TypeScript object function store.
- [ ] Use cookies to implement stateless client sessions.
- [ ] Use WebSockets and process management to automate server-to-client payloads from database subscriptions.

_Rootedjs - Get it from the source!_
