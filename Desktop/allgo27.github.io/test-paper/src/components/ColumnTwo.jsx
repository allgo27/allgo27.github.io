import "../App.css";
import Block from "./Block";

function ColumnTwo() {
  return (
    <div className="ColumnTwo">
      <br />
      <Block
        header={"About Me"}
        listOfSubheads={[<h5>Hello!</h5>]}
        listOfBullets={[
          [
            <li key="AM.1">
              My name is Evan Allgood (they/them; he/him). I am an aspiring
              archivist and librarian currently residing in Minneapolis, MN.
              When not working, you'll likely find me reading, west coast swing
              dancing, baking, or petting my sweet dog, Kodiak.
            </li>,
            <li key="AM.2">
              If you'd like a more concise version of my resume, please click{" "}
              <a href="EvanAllgood_Resume.pdf" download>
                {" "}
                here
              </a>
              .
            </li>,
          ],
        ]}
      />
      <br />
      <Block
        header={"Professional Experience"}
        listOfSubheads={[
          <h5>
            CRM Architect & Project Manager |{" "}
            <a href="https://www.beaverspondpress.com">Beaver's Pond Press</a>{" "}
            (April 2022 - Present)
          </h5>,
          <h5>
            Software Engineer I |{" "}
            <a href="https://minnetronixmedical.com/">
              Minnetronix Medical, Inc.
            </a>{" "}
            (Nov. 2020 - March 2022)
          </h5>,
          <h5>
            Software Consultant & Intern |{" "}
            <a href="http://ballingt.com/">Thomas Ballinger</a> (May 2020 - Nov.
            2020)
          </h5>,
          <h5>
            Developmental Editor & Copyeditor | Freelance (Sept. 2019 - Feb.
            2022)
          </h5>,
          <h5>
            Editorial Intern |{" "}
            <a href="https://www.beaverspondpress.com">Beaver's Pond Press</a>{" "}
            (May 2019 - Sept. 2019)
          </h5>,
        ]}
        listOfBullets={[
          [
            <li key="PE.1">
              Researched, created, documented, and currently maintain backend
              organizational systems for bookstore management in preparation for
              opening in 2023.
            </li>,
            <li key="PE.2">
              Manage publication process for books, liaising between authors,
              illustrators, editors, designers, printers, and distributors.
            </li>,
            <li key="PE.3">
              Designed, built, and currently maintain payouts system for authors
              who sell their books through Beaver's Pond online.
            </li>,
            <li key="PE.4">
              Design and build workflows for Podio, a Customer Relationship
              Management tool.
            </li>,
            <li key="PE.5">
              Edit manuscripts, promotional materials, metadata, and other copy.
            </li>,
          ],
          [
            <li key="PE.6">
              Led a team of software engineers to build safety critical,
              embedded software for an{" "}
              <a href="https://avanosmedicaldevices.com/digestive-health/cortrak-2-enteral-access-system-eas/">
                enteral access system
              </a>
              , including live, 3D-rendering displays, informational screens,
              and backend system monitoring algorithms.
            </li>,
            <li key="PE.7">
              Wrote unit tests in both pre-built and customized testing
              frameworks.
            </li>,
            <li key="PE.8">
              Wrote technical, developer-facing documentation, as well as
              customer-facing documentation and marketing materials.
            </li>,
            <li key="PE.9">
              Presented demonstrations of technical work to stakeholders.
            </li>,
          ],
          [
            <li key="PE.10">
              Built audio editor, embed UI, and server tools for an in-process
              podcast-remixing web application using JavaScript and React.js.
            </li>,
            <li key="PE.11">
              Contributed to open-source projects including two Python
              libraries:{" "}
              <a href="https://github.com/bpython/bpython">bpython</a>, a
              command line interface to the Python interpreter, and{" "}
              <a href="https://github.com/bpython/curtsies?">curtsies</a>, a
              terminal wrapper.
            </li>,
          ],
          [
            <li key="PE.12">
              Edited and reorganized manuscripts like{" "}
              <a href="https://www.barnesandnoble.com/w/salou-morenike-mcfaal/1142141314">
                <i>Salou</i>
              </a>{" "}
              by Morenike McFaal to improve flow, structure, and the strength of
              content, plot, and character development.
            </li>,
            <li key="PE.13">
              Built out style guides and copyedited manuscripts for consistency
              and correctness.
            </li>,
            <li key="PE.14">
              Created and carried out aggressive timeline with clients from
              first edit to book deal.
            </li>,
          ],
          [
            <li key="PE.15">
              Performed copyedits, press checks, and critical reads of over two
              dozen manuscripts.
            </li>,
            <li key="PE.16">
              Ghost-wrote content for{" "}
              <a href="https://itascabooks.com/close-encounters-portraits-of-nature/">
                <i>Close Encounters: Portraits of Nature</i>
              </a>{" "}
              by Ray Colby.
            </li>,
            <li key="PE.17">
              Wrote and copy-edited back cover copy for books like{" "}
              <a href="https://itascabooks.com/will-you-hold-me/">
                <i>Will You Hold Me?</i>
              </a>{" "}
              by Ray Dick.
            </li>,
          ],
        ]}
      />
      <br />
      <Block
        header={"Volunteer Experience"}
        listOfSubheads={[
          <h5>
            Board Member & Volunteer |{" "}
            <a href="https://qlibrary.org/">Quatrefoil Library</a> (Dec. 2020 -
            Present)
          </h5>,
          <h5>
            Facilitator |{" "}
            <a href="https://surj.org/">
              Showing Up for Racial Justice Abolition Circles
            </a>{" "}
            (Sept. 2020 - Sept. 2021)
          </h5>,
          <h5>
            Board Member & Facilitator |{" "}
            <a href="https://www.carleton.edu/dean-of-students/initiatives/seed/">
              Students Engaging in Essential Dialogue
            </a>{" "}
            (Jan. 2017 - June 2020)
          </h5>,
        ]}
        listOfBullets={[
          [
            <li key="VE.1">
              Copyedit donor- and member-facing quarterly newsletters and annual
              report.
            </li>,
            <li key="VE.2">
              Write member-facing materials including{" "}
              <a href="https://qlibrary.org/queer-poetry-recommendations/">
                recommended reading lists
              </a>
              ,{" "}
              <a href="https://qlibrary.org/quatrefoil-library-catalog/quatrefolio/">
                Quatrefolio content
              </a>
              , and{" "}
              <a href="https://qlibrary.org/quatrefoil-launches-q-digital/">
                explainers
              </a>{" "}
              for library tools like Libby.
            </li>,
            <li key="VE.3">
              Organize and host events for community members, including a Narcan
              training.
            </li>,
            <li key="VE.4">
              Volunteer at the front desk to welcome patrons, check materials in
              and out, train new volunteers, and assist patrons in using library
              tools.
            </li>,
            <li key="VE.5">
              Design and build workflows, and clean databases for Salesforce.
            </li>,
          ],
          [
            <li key="VE.6">
              Planned and facilitated conversations around racial justice,
              accountability, police and prison abolition, and community
              building.
            </li>,
          ],
          [
            <li key="VE.7">
              Organized and led trainings on facilitating productive dialogue
              surrounding race, sexuality, class, and gender identity.
            </li>,
            <li key="VE.8">
              Liaised with Carleton College board members, donors, and
              facilitators to raise and manage $7,000 annual budget.
            </li>,
          ],
        ]}
      />
      <br />
      <Block
        header={"Relevant Projects"}
        listOfSubheads={[
          <h5>
            <a href="http://www.cs.carleton.edu/cs_comps/1920/fairness/final-results/index.html">
              That's Not Fair: Identifying and Reducing Bias in Machine Learning
            </a>{" "}
            | Computer Science Capstone Project (April 2019 - May 2020)
          </h5>,
          <h5>
            <a href="https://comps.engl.sites.carleton.edu/presentations/this-body-unbound-evan-allgood/">
              This Body, Unbound
            </a>{" "}
            | English Capstone Project (April 2019 - May 2020)
          </h5>,
        ]}
        listOfBullets={[
          [
            <li key="RP.1">
              Researched fairness sensitive algorithms techniques, replicated
              research papers, and modified algorithms to repair racial, gender,
              and class disparities in categorization problems.
            </li>,
          ],
          [
            <li key="RP.2">
              Interviewed two dozen transgender and gender non-conforming adults
              and created a chapbook of poems that envisions the everyday
              language of trans people as poetry.
            </li>,
          ],
        ]}
      />
      <br />
      <Block
        header={"Education"}
        listOfSubheads={[
          <h5>
            <a href="https://www.carleton.edu/">Carleton College</a> |
            Northfield, MN (Sept. 2016 – June 2020)
          </h5>,
        ]}
        listOfBullets={[
          [
            <li key="E.1">B.A. in English, with distinction</li>,
            <li key="E.2">B.A. in Computer Science</li>,
            <li key="E.3">
              Selected Coursework: Algorithms, Computability and Complexity,
              Introduction to Education Studies, Natural Language Processing,
              The Politics of Teaching, The Rise of the Novel, Senior Seminars
              (Computer Science; English), Software Design, Twenty-First Century
              Novels, Queer Literature
            </li>,
          ],
        ]}
      />
      <br />
      <Block
        header={"Skills"}
        listOfSubheads={[
          <h5>Programming Skills</h5>,
          <h5>Auxiliary Skills</h5>,
        ]}
        listOfBullets={[
          [
            <li key="S.1">
              Python, JavaScript, React.js, Qt/QML, CSS, HTML, C++, GoogleTest,
              git, GitHub, SVN, QNX, Windows, macOS, Caliber, Visual Studio,
              Podio, Salesforce
            </li>,
          ],
          [
            <li key="S.2">
              Microsoft Products, Adobe InDesign, copyediting, ghost-writing,
              data collection, version control, facilitation, presentation,
              American Sign Language (intermediate)
            </li>,
          ],
        ]}
      />
      <br />
      <Block
        header={"Awards"}
        listOfSubheads={[
          <h5>
            Distinction,{" "}
            <a href="https://digitalcommons.carleton.edu/comps/2667/">
              English Capstone
            </a>{" "}
            (2020)
          </h5>,
          <h5>
            Distinction,{" "}
            <a href="http://www.cs.carleton.edu/cs_comps/1920/fairness/final-results/index.html">
              Computer Science Capstone
            </a>{" "}
            (2020)
          </h5>,
          <h5>
            Awarded,{" "}
            <a href="https://www.carleton.edu/english/resources/prizes/huntington/">
              Huntington Poetry Prize
            </a>{" "}
            (2020)
          </h5>,
          <h5>
            Awarded,{" "}
            <a href="https://www.carleton.edu/theater-dance/2020-honors-recognition/">
              Sigrid and Erling Larsen Award in Creative and Performing Arts
            </a>{" "}
            (2020)
          </h5>,
          <h5>
            Exemplary,{" "}
            <a href="https://apps.carleton.edu/campus/writingprogram/portfolio/">
              Carleton College Writing Portfolio
            </a>{" "}
            (2018)
          </h5>,
        ]}
        listOfBullets={[
          [<li key="A.1">Highest award on senior capstone project.</li>],
          [<li key="A.2">Highest award on senior capstone project.</li>],
          [<li key="A.3">Highest poetry award at Carleton College.</li>],
          [
            <li key="A.4">
              Highest award for students who create literature, drama, music,
              art, dance, photography, or film at Carleton College.
            </li>,
          ],
          [
            <li key="A.5">
              Scored in top 10% of writers in the class of 2020.
            </li>,
          ],
        ]}
      />
      <br />
    </div>
  );
}

export default ColumnTwo;
