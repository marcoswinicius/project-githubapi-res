import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';
import '../App.css'

const DisplayTable = ({data, repositories}) => {
    return (
        <div className="s_user">
            <div className="repos_content">
        <Card className="card">
    <Image src={data.avatar_url} wrapped ui={false} alt={data.avatar_url} />
    <Card.Content>
      <Card.Header>{data.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.login}</span>
      </Card.Meta>
      <Card.Description>
        {data.bio}
      </Card.Description>
    </Card.Content>
    
  </Card>

  <div className="cardsRepos">
    {repositories.map(repo => (
    <div key={repo.name}>
    <Card className="card_repo"
    href={repo.html_url}
    header={repo.name}
    meta={repo.language}
    target= "_blank"
    description={repo.description}
  />
  </div>
  ))}
  </div>
  </div>
  </div>
    )

}

export default DisplayTable;