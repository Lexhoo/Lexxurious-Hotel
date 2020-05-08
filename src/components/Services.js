import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          'Elit ipsum cupidatat commodo do dolore duis voluptate reprehenderit proident laborum non officia fugiat. Esse ipsum ullamco elit ut.  consequat sint. Eiusmod excepteur ullamco'

      },
      {
        icon: <FaHiking />,
        title: "Endless Hicking",
        info:
          'Elit ipsum cupidatat commodo do dolore duis voluptate reprehenderit proident laborum non officia fugiat. Esse ipsum ullamco elit ut.  consequat sint. Eiusmod excepteur ullamco'

      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle",
        info:
          'Elit ipsum cupidatat commodo do dolore duis voluptate reprehenderit proident laborum non officia fugiat. Esse ipsum ullamco elit ut.  consequat sint. Eiusmod excepteur ullamco'

      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          'Elit ipsum cupidatat commodo do dolore duis voluptate reprehenderit proident laborum non officia fugiat. Esse ipsum ullamco elit ut.  consequat sint. Eiusmod excepteur ullamco'

      },
    ]
  }
  render() {
    return (
      <section className="services">
        <div>
          <Title title="services" />
          <div className="services-center">
            {this.state.services.map((item, index) => {
              return (
                <article key={index} className="service">
                  <span>{item.icon}</span>
                  <h6>{item.title}</h6>
                  <p>{item.info}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}
