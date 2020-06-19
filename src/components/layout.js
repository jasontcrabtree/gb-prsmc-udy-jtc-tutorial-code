import React from 'react';

import './layout.css';
import { StaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';

export const navigationQuery = graphql`
  {
    prismic {
      allNavigations {
        edges {
          node {
            wordmark
            logo
            navigation_links {
              label
              link {
                ... on PRISMIC_Page {
                  _meta {
                    uid
                  }
                }
                ... on PRISMIC_Contact_page {
                  _meta {
                    uid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Main = styled.main`
  margin: 0 auto;
  max-width: 880px;
  padding: 1rem 1rem 4.8rem;
`;

const Nav = styled.nav`
  margin: 0px auto;
  max-width: 880px;
  display: flex;
  padding: 2.4rem 2.4rem;

  .home-link {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const NavList = styled.ul`
  margin-left: auto;
  display: flex;
`;

const Wordmark = styled.span`
  font-weight: bold;
`;

const Logo = styled.span`
  margin-right: 4px;
  vertical-align: center;
  height: 20px;
  width: 20px;
`;

const NavLink = styled.li`
  list-style: none;
  margin-left: 24px;
`;

const Layout = props => {
  if (!props) return null;
  const { children } = props;


  return (
    <>
      <Nav>
        <StaticQuery
          query={`${navigationQuery}`}
          render={data => {
            const staticData = data.prismic.allNavigations.edges[0].node;
            return (
              <>
                <Link to="/" className="home-link">
                  <Logo>
                    <img
                      src={staticData.logo.url}
                      alt={staticData.logo.alt}
                    />
                  </Logo>
                  <Wordmark className="wordmark">
                    {staticData.wordmark}
                  </Wordmark>
                </Link>
                <NavList>
                  {staticData.navigation_links.map(
                    link => {
                      return (
                        <NavLink key={link.link._meta.uid}>
                          <Link to={`/${link.link._meta.uid}`}>
                            {link.label}
                          </Link>
                        </NavLink>
                      );
                    },
                  )}
                </NavList>
              </>
            );
          }}
        />
      </Nav>
      <Main>{children}</Main>
    </>
  );
};

export default Layout;
