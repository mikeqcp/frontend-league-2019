using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InitialVelocity : MonoBehaviour
{
    [SerializeField]
    private Vector3 velocity;

    void Awake()
    {
        GetComponent<Rigidbody>().AddForce(velocity, ForceMode.VelocityChange);
    }

}
