import React from 'react';
import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandCSharp,
  IconFileTypeHtml,
  IconFileTypeCss,
  IconSql,
  IconBrandMysql,
  IconBrandMongodb,
  IconBrandVue,
  IconBrandAngular,
  IconBrandFlutter,
  IconBrandFirebase,
  IconBrandGraphql,
} from '@tabler/icons-react';
import './blog.css';

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Skills </h2>
      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__details">
            <h3 className="blog__title">Frameworks</h3>
            <ul className="skills">
              <li>
                <IconBrandReact style={{ height: 32, width: 32 }} />
                React.js/React Native
              </li>
              <li>
                <IconBrandNodejs style={{ height: 32, width: 32 }} />
                Node.js/Nest.js/Express.js
              </li>
              <li>
                <IconBrandVue style={{ height: 32, width: 32 }} />
                Vue.js
              </li>
              <li>
                <IconBrandAngular style={{ height: 32, width: 32 }} />
                Angular.js
              </li>
              <li>
                <IconBrandFlutter style={{ height: 32, width: 32 }} />{' '}
                Flutter(Dart)
              </li>
            </ul>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__details">
            <h3 className="blog__title">Programing Languages</h3>
            <ul className="skills">
              <li>
                <IconBrandJavascript style={{ height: 32, width: 32 }} />
                JavaScript
              </li>
              <li>
                <IconBrandTypescript style={{ height: 32, width: 32 }} />
                TypeScript
              </li>
              <li>
                <IconBrandCSharp style={{ height: 32, width: 32 }} />
                C#
              </li>
              <li>
                <IconFileTypeHtml style={{ height: 32, width: 32 }} />
                HTML
              </li>
              <li>
                <IconFileTypeCss style={{ height: 32, width: 32 }} />
                CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="blog__card">
          <div className="blog__details">
            <h3 className="blog__title">Database</h3>
            <ul className="skills">
              <li>
                <IconSql style={{ height: 32, width: 32 }} />
                SQL
              </li>
              <li>
                <IconBrandMysql style={{ height: 32, width: 32 }} />
                MySQL
              </li>
              <li>
                <IconBrandMongodb style={{ height: 32, width: 32 }} /> MongoDB
              </li>
              <li>
                <IconBrandFirebase style={{ height: 32, width: 32 }} /> Firebase
              </li>
              <li>
                <IconBrandGraphql style={{ height: 32, width: 32 }} />
                GraphQL
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
