import React from 'react';
import _ from 'lodash';
import {graphql} from 'gatsby';
import CookieConsent, { Cookies } from "react-cookie-consent";

import components, {Layout} from '../components/index';
import {classNames} from '../utils';

// this minimal GraphQL query ensures that when 'gatsby develop' is running,
// any changes to content files are reflected in browser
export const query = graphql`
  query($url: String) {
    sitePage(path: {eq: $url}) {
      id
    }
  }
`;

export default class Advanced extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            {_.map(_.get(this.props, 'pageContext.frontmatter.sections', null), (section, section_idx) => {
                let component = _.upperFirst(_.camelCase(_.get(section, 'type', null)));
                let Component = components[component];
                return (
                  <Component key={section_idx} {...this.props} section={section} site={this.props.pageContext.site} />
                )
            })}
                <CookieConsent
                    debug={true}
                    location="bottom"
                    buttonText="Akzeptieren"
                    cookieName="myAwesomeCookieName2"
                    style={{ background: "#98756F" }}
                    uttonStyle={{ color: "#F19E8E", fontSize: "13px" }}
                    expires={999}
                    overlay={true}
                    >
                    Diese Webseite verwendet Cookies, um die Funktionalität zu gewährleisten.
                </CookieConsent>
            </Layout>
        );
    }
}
