### Python application developed by a team of 6 people

In order to avoid pushing errors and/or bugs to production builds, we need to know and apply both Continuous Integration (CI) and Continuous Delivery (CD) principles. Thanks to them, we can avoid one developer overriding someone else's work, preventing integration problems on the go.

To set up CI properly, we must take care of three things:

For linting, there are several options like Flake8, Pylint or Ruff, being the first one the most used one. All of theme offer a wide variety of customization options, so now the main issue is to find which ones every coworker accepts.

Testing can be handled by Behave, Lettuce or Pytest testing frameworks. It is important to run them on the local version in order to commit the changes to the main branch, but it is also very important to run them once pushed. When double-checking, we ensure the "works on my machine" situation is not going to happen.

When building, as Python is an interpreted language the code does not need to be compiled. Anyway, before pushing to the main/production branch, every developer must check if there is a newer version of the base code, so the updates part from the latest.

Some alternatives to Jenkins and GitHub could be GitLab CI, Circle CI or Bamboo. The first one is well-integrated with GitLab repositories. Circle CI provides advanced configurations and integrations, focused on larger teams and complex workflows. Bamboo is a solid choice for teams already using other Atlassian tools like JURA and Bitbucket.

Deciding between self-hosting and cloud-based depends on several factors, such as ease of setup, scalability and costs.

Though a cloud-based environment may be easier to set up and provides a stronger infrastructure in case the application faces higher traffic, the costs might be elevated in comparison to the initial resources available and expected traffic.

Self-hosting allows for a greater control over the infrastructure and easier initial step, as it does not require such an important payment, as it can even escalate depending on the traffic. It might have a higher learning curve, but the possible customization may pay off in future problems.

After thinking, we decided to go for the self-hosting option, making everything fully customizable for our needs. If the application starts to gain traffic and popularity, we may need to reconsider our decision.
