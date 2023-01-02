// @flow
import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    // your module methods go here, for example:
    add(a: number, b: number): Promise<number>;

    // eventful Sqrt
    eventfulSqrt(a: number): void;

    addListener: (eventType: string) => void;
    removeListeners: (count: number) => void;

}
export default (TurboModuleRegistry.get<Spec>(
    'RNCalculator'
): ?Spec);
