using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Orbiter : MonoBehaviour
{
    float angleRotated = 0;

    [SerializeField]
    Transform centralObject;

    [SerializeField]
    float angularVelocity = 0.1f;

    [SerializeField]
    Vector3 orbitAxis = Vector3.up;

    [SerializeField]
    float ellipseEccentricity = 0f;

    float initialDistance = 0.0f;

    private void Awake()
    {
        initialDistance = (centralObject.position - transform.position).magnitude;
    }

    float RadianAngleRotated
    {
        get
        {
            return Mathf.Deg2Rad * angleRotated;
        }
    }

    float EllipseSeminMajorAxis
    {
        get { return initialDistance / (1 - ellipseEccentricity); }
    }

    float GetEllipseRadius()
    {
        var numerator = EllipseSeminMajorAxis * (1f - Mathf.Pow(ellipseEccentricity, 2f));
        var denominator = 1 + ellipseEccentricity * Mathf.Cos(RadianAngleRotated);

        return numerator / denominator;
    }

    void FixedUpdate()
    {
        angleRotated = (angleRotated + angularVelocity) % 360;

        transform.RotateAround(centralObject.position, orbitAxis, angularVelocity);

        var relativePosition = transform.position - centralObject.position;

        var distance = GetEllipseRadius();

        transform.position = centralObject.position + relativePosition.normalized * distance;
    }
}
