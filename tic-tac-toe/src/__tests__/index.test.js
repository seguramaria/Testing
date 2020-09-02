import React from 'react';
import { render } from '@testing-library/react';
import { Game } from '../game'

describe('Game history', function() {
    it('should start with empty history', function() {
        const { container } = render(<Game />);

        const movementHistory = container.querySelectorAll('.game-info');

        expect(movementHistory.length).toBe(1);
    });
});
