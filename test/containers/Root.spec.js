import React from 'react';
import {shallow} from 'enzyme';
import Root from 'containers/Root';
import sinon from 'sinon';
import {expect} from 'chai';

const wrapper = shallow(<Root/>);

describe('(Container) Root',() => {
 it('renders as a <div>',() => {

    expect(wrapper.type()).to.equal('div');
 });
 
 it('has style with height 100%',() => {
 
    const expectedStyles = {
       height:'100%',
       background:'#333'
    };
    expect(wrapper.prop('style')).to.eql(expectedStyles);
 });

 it('contains a header explaining the app',() => {
    expect(wrapper.find('.welcome-header')).to.have.length(1);
 });
});
