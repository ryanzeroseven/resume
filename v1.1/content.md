# Irsjaad's resume

## Branding

Headline: A Mendix developer with an affinity for styling.

Brand color: #0b7285

## About Irsjaad

A motivated and eager to learn Mendix developer with 2 years of experience.
I believe in consistent, sustainable and simple building, with an importance on clear communication and mutual respect.

I’ve gone through a number of phases in my career, each of them adding essential pieces to my continuous evolving work ethos and philosophy. This unceasing learning curve has strengthen my ability to adapt and be creative but staying true to my core believes.

Core believes

- Consistency: Repetitive and clear structure in the code ensures mitigation of suprises. Consistency creates dependability.
- Sustainability: Build future-proof and easy to maintain applications. Fulfill todays needs without compromising tomorrow's wants.
- Simplicity: Keeping things simple and clear wheverever possible. So I can stay consistent and sustainable.

fun facts

- Amsterdam
- food
- travel
- Anime
- webtoons
- Videogames

### Work experience

International Card Services, Diemen — DevOps Engineer
junior Mendix developer
January 2021 - PRESENT
As a developer building both a responsive as a native application using
Mendix as a front-end layer with non persistent entities. Integrating
several other layers with Mendix via REST calls and styling the
application using SCSS and custom widgets.
As a consultant interacting with different teams to propose solutions
for features wanted from the business and how to best implement these
using Mendix and other technologies.
Skill development: Coding principles, building in Mendix, critical
thinking, creative solution thinking, user experience vs user interface
for best result, HTML, CSS, working agile, understanding of CI/CD
concept.

International Card Services, Diemen — Fraud Control,
fraud detection and analysis
November 2018 - December 2020
Monitoring and analyzing transactions, recognizing fraud patterns,
secure customer and credit card details.
Skill development: Analytical thinking, pattern recognition, team
collaboration, database lookups.
International Card Services, Diemen — Customer Care
Service Agent

September 2011 - October 2018
Customer care, handling complaints, administrative activities.
Skill development: communication, team work, solution-oriented
thinking, empathy

### Skills

Building in Mendix
HTML
CSS
JavaScript
REST
Testing

Strong work ethic
Teamwork
Clear communication
Adaptability
Leadership skill
Problem solving oriented

Dutch - Native
English - Fluent
Spanish - Moderate

### Education

Vrije Universiteit, Amsterdam — Information Management
September 2015 - September 2017

Vrije Universiteit, Amsterdam — Bedrijfskunde (Business
Administration)
September 2013 - September 2015

Vrije Universiteit, Amsterdam — Sociologie (Sociology)
September 2013 - September 2015

### Portfolio

Project Aurora— Rebuilding the landscape of services offered
for credit cards
Project Aurora is about making the application as dynamic as possible
to move with the current trends in the financial markets for credit
cards.

https://ryan-omnifood.netlify.app/

### Achievements

ACHIEVEMENTS
Mendix Rapid developer
Certificate
Mendix Intermediate developer
Certificate
Lean Six Sigma Orange Belt
Emergency Response Certificate
WFT

### Contact

Email: irmahabier@gmail.com

### Links

- linkedIn: www.linkedin.com/in/irsjaad-mahabier
- instagram: https://www.instagram.com/ir.mahabier/
- discord?

######

## Sections

- navigation (& logo?)
- Hero intro (see branding)
- About + core believes
- Work + Skills
- Education
- Portfolio
- Achievements
- Call to action? (form with email and input message?)
- Footer - contact information + links

NOTES

- Make section padding less and generic class
- fun fact icon generic?
- rename experience classes

CLEAN UP
HTML
CSS
JS

create new html page for:
write versioning...
write reflection...

favicon. mmobile friendly, javascript, mobile menu, sticky menu

notes:

## Investigate section paddings, make it more generic:

section-hero: padding 9.6rem 0
section-about: padding 9.6rem 0 0 0
section-personal: padding 0 0 9.6rem 0
section-experience: padding: 9.6rem 0;
section-skills: padding: 9.6rem 0 0 0
section-portfolio: padding: 0 0 9.6rem 0
section-cta: padding: 12.8rem 0

## make tooltip more generic?

general class idea's

## .flex-center

possibly added to following classes:

- .social - maybe remove margin-top place margin bottom on hero-description
- .social-links - yes
- .experience-date - yes
- .status-tag - yes
- .footer-social a - yes although it only needs to be flex nothing else..

## seen in: .hero-text-box .first-col .nav-col? .achievements-list, .cta-text-box

flex-column {
display: flex;
flex-direction: column;
}

## seen in personal and portfolio

top-border {
border-top: 1px solid #eee;
padding-top: 9.6rem;
}

## icon:

/_ lets make it generic? _/
.footer-social-icon {
width: 3.2rem;
height: 3.2rem;
}

## combine section about

section about used 3 general grid classes all 3 only used once combine make 1 class remove from general

## check the grid templates column

check if using same grid template columns
