import React from 'react'
import SkillTag from './SkillTag'

function Category({heading, skills}) {
  return (
    <div>
            <h3 className='mb-2 text-lg ml-2'>{heading}:</h3>
            <div className='flex gap-2 flex-wrap mb-5'>
                {skills?.map((skill, index) => 
                    <SkillTag key={index} tag={skill}/>
                )}     
            </div>
        </div>
  )
}

export default Category
