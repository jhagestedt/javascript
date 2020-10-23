/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.19.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { V1ReplicaSetCondition } from './v1ReplicaSetCondition';

/**
* ReplicaSetStatus represents the current status of a ReplicaSet.
*/
export class V1ReplicaSetStatus {
    /**
    * The number of available replicas (ready for at least minReadySeconds) for this replica set.
    */
    'availableReplicas'?: number;
    /**
    * Represents the latest available observations of a replica set\'s current state.
    */
    'conditions'?: Array<V1ReplicaSetCondition>;
    /**
    * The number of pods that have labels matching the labels of the pod template of the replicaset.
    */
    'fullyLabeledReplicas'?: number;
    /**
    * ObservedGeneration reflects the generation of the most recently observed ReplicaSet.
    */
    'observedGeneration'?: number;
    /**
    * The number of ready replicas for this replica set.
    */
    'readyReplicas'?: number;
    /**
    * Replicas is the most recently oberved number of replicas. More info: https://kubernetes.io/docs/concepts/workloads/controllers/replicationcontroller/#what-is-a-replicationcontroller
    */
    'replicas': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "availableReplicas",
            "baseName": "availableReplicas",
            "type": "number"
        },
        {
            "name": "conditions",
            "baseName": "conditions",
            "type": "Array<V1ReplicaSetCondition>"
        },
        {
            "name": "fullyLabeledReplicas",
            "baseName": "fullyLabeledReplicas",
            "type": "number"
        },
        {
            "name": "observedGeneration",
            "baseName": "observedGeneration",
            "type": "number"
        },
        {
            "name": "readyReplicas",
            "baseName": "readyReplicas",
            "type": "number"
        },
        {
            "name": "replicas",
            "baseName": "replicas",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return V1ReplicaSetStatus.attributeTypeMap;
    }
}

