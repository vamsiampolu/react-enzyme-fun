import React from 'react';
import CommentList from 'components/CommentList';
import {expect} from 'chai';
import sinon from 'sinon';
import {
  describeWithDOM,
  mount,
  shallow,
  spyLifecycle
} from 'enzyme';

describe('(Component) CommentList',() => {
  describeWithDOM('Lifecycle methods',() => {
     it('calls componentDidMount',() => {
        spyLifecycle(CommentList)
	const props = {
	  onMount:() => {},
	  isActive:false
	};
	mount(<CommentList {...props}/>);
	expect(CommentList.prototype.componentDidMount.calledOnce).to.be.true;
     });

     it('calls onMount prop once it mounts',() => {
        const props = {onMount:sinon.spy()};
	mount(<CommentList {...props}/>);
	expect(props.onMount.calledOnce).to.be.true;
     });
  });

  it('should render as a <ul/>',() => {
     const props = {onMount:() => {}};
     const wrapper = shallow(<CommentList/>);
     expect(wrapper.type()).to.equal('ul');
  });

  describe('when active',() => {
     const wrapper = shallow(
       <CommentList onMount = {()=> {}} isActive/>		     
     );
    it('should render with classname active-list',() => {
       expect(wrapper.prop('className')).to.equal('active-list');
    });

    describe('when inactive ...', () => {
       const wrapper = shallow(<CommentList onMount={() => {}} isActive={false}/>)
       it('should render with classname inactive-list',() => {
          expect(wrapper.prop('className')).to.equal('inactive-list');
       });
    });
  });
});
