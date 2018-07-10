import React, { Component } from 'react';
import ChipFilters from './ChipFilters';
import { Chip } from 'material-ui';

export default class TagsList extends Component {
    render() {
        return (
            <div>
                {
                    this.props.tags.map((tag, key) => {
                        return (
                            <ChipFilters
                                label={tag}
                                key={tag} />
                        )
                    })
                }
            </div>
        )
    }
}