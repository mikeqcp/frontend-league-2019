using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GravityTarget : MonoBehaviour
{
    const float GRAVITY_CONST = 0.5f;

    GravitySource[] sources;

    [SerializeField]
    private float mass = 1;

    void Start()
    {
        sources = FindObjectsOfType<GravitySource>();
    }

    Vector3 GetSourceGravity(GravitySource src)
    {
        var distance = src.transform.position - transform.position;
        var force = GRAVITY_CONST * src.gravityStrength * mass / Mathf.Pow(distance.magnitude, 2);

        return distance.normalized * force;
    }

    Vector3 GetAppliedGravity()
    {
        var gravitySum = new Vector3(0, 0, 0);
        foreach(var src in sources)
        {
            gravitySum += GetSourceGravity(src);
        }

        return gravitySum;
    }

    void FixedUpdate()
    {
        var appliedForce = GetAppliedGravity();
        GetComponent<Rigidbody>().AddForce(appliedForce, ForceMode.Acceleration);
    }
}
