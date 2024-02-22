import React, { useState } from 'react'
import CollasableParent from './CollasableParent';

export default function CollasableChild({node}) {
  const [isExpanded, setisExpanded] = useState(false)
  return (
    <div>
      <div onClick={()=>setisExpanded(!isExpanded)}>{node.label}</div>
      {isExpanded && node.children && (
        <div>
          <CollasableParent data={node.children} />
        </div>
      )}
    </div>
  );
}

export default function CollasableParent({data}) {
  return (
    <div className="collasable">
      {data.map(item=> {
        return <CollasableChild node={item} />
      })}
    </div>
  );
}

