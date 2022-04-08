import { Card } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from "react";
import { MenuItem } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';

export default observer(function ArticleFilters() {
  const { articleStore: {predicate, setPredicate} } = useStore();

  return (
    <>
      <Card>
        <div className="Container">
        <h2>Filters</h2>
        </div>

        <div className='Container'>
          <MenuItem
            content='All Articles'
            active={predicate.has('all')}
            onClick={() => setPredicate('all', 'true')}
          />
  
          <MenuItem
            content='Contributions'
            active={predicate.has('isContributor')}
            onClick={() => setPredicate('isContributor', 'true')}
          />

          <MenuItem
            content='My Articles'
            active={predicate.has('isCreator')}
            onClick={() => setPredicate('isCreator', 'true')}
          />
        </div>
        
      </Card>
    </>
  )
})